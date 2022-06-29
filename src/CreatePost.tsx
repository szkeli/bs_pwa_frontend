import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import {
  useCreatePostMutation,
  useSubjectsLazyQuery,
  useUniversitiesQuery,
} from "./generated/graphql";

export default function CreatePost() {
  const { data: UniversitiesData, loading: UniversitiesLoading } =
    useUniversitiesQuery();
  const [fetchSubjects, { data: SubjectsData }] = useSubjectsLazyQuery();
  const [createPost] = useCreatePostMutation();
  const [universityId, setUniversityId] = useState("");
  const [subjectId, setSubjectId] = useState<string>();
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  useEffect(() => {
    if (!UniversitiesLoading) {
      fetchSubjects({
        variables: {
          universityId,
        },
      });
    }
  }, [universityId, UniversitiesLoading, fetchSubjects]);

  const handleChangeUniversity = (event: SelectChangeEvent) => {
    setUniversityId(event.target.value);
  };
  const handleChangeSubject = (event: SelectChangeEvent) => {
    setSubjectId(event.target.value);
  };
  const handleContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  const handleAnonymous = (event: ChangeEvent<HTMLInputElement>) => {
    setAnonymous(event.target.checked);
  };
  const handleSubmit = () => {
    createPost({
      variables: {
        universityId,
        content,
        isAnonymous: anonymous,
        subjectId,
      },
    });
  };
  const universities = UniversitiesData?.universities.edges.map((i) => i.node);
  const subjects = SubjectsData?.subjectsWithRelay.edges.map((i) => i.node);

  return (
    <Box>
      <Stack spacing={2}>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="university-selector">选择学校</InputLabel>
          <Select
            labelId="university-selector"
            id="selector"
            value={universityId}
            onChange={handleChangeUniversity}
          >
            {universities?.map((i) => (
              <MenuItem value={i?.id}>{i?.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {(subjects?.length ?? 0) !== 0 ? (
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="subject-selector">选择主题</InputLabel>
            <Select
              labelId="subject-selector"
              id="sselector"
              value={subjectId}
              onChange={handleChangeSubject}
            >
              {subjects?.map((i) => (
                <MenuItem value={i?.id}>{i?.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <></>
        )}

        <TextField
          label="content"
          multiline
          variant="filled"
          value={content}
          onChange={handleContent}
        />
        <FormControlLabel
          control={<Checkbox checked={anonymous} onChange={handleAnonymous} />}
          label="使用匿名"
        />
        <Button variant="contained" onClick={handleSubmit}>
          发布
        </Button>
      </Stack>
    </Box>
  );
}

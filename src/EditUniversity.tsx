import LoadingButton from "@mui/lab/LoadingButton";
import { Button, Stack, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useUniversityQuery,
  useUpdateUniversityMutation,
} from "./generated/graphql";

export default function EditUniversity() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const {
    data: UniversityData,
    error: UniversityError,
    loading: UniversityLoading,
  } = useUniversityQuery({ variables: { id: id ?? "" } });
  const [updateUniversity, { data, error, loading }] =
    useUpdateUniversityMutation();

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeLogoUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setLogoUrl(event.target.value);
  };

  useEffect(() => {
    if (!UniversityLoading) {
      setName(UniversityData?.university.name ?? "");
      setLogoUrl(UniversityData?.university.logoUrl ?? "");
    }
    return;
  }, [
    UniversityData?.university.logoUrl,
    UniversityData?.university.name,
    UniversityLoading,
  ]);

  if (error) return <div>error</div>;

  return (
    <Stack>
      <TextField
        id="name"
        label="学校名字"
        value={name}
        onChange={handleChangeName}
        variant="filled"
      />
      <TextField
        id="logoUrl"
        label="学校logo"
        value={logoUrl}
        onChange={handleChangeLogoUrl}
        variant="filled"
      />
      <LoadingButton
        onClick={() => {
          updateUniversity({
            variables: {
              id: id ?? "",
              name,
              logoUrl,
            },
          });
        }}
        loading={loading}
        disabled={loading}
        variant="contained"
      >
        更新
      </LoadingButton>
    </Stack>
  );
}

/// An UserEntry for common usecase.

import { VerifiedUser as VerifiedUserIcon } from "@mui/icons-material";
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export interface UserItemProps {
  user:
    | null
    | undefined
    | {
        id: string;
        createdAt: string;
        name: string;
        credential?: any;
        avatarImageUrl?: string | undefined | null;
      };
}

export default function UserItem(props: UserItemProps) {
  const navigate = useNavigate();
  const user = props.user;
  const verified = user?.credential;

  return (
    <>
      <ListItem
        button
        secondaryAction={
          verified ? (
            <IconButton edge="end" aria-label="comments">
              <VerifiedUserIcon color="primary" />
            </IconButton>
          ) : (
            <></>
          )
        }
        onClick={() => {
            navigate(`/user/${user?.id}`)
        }}
      >
        <ListItemAvatar>
          <Avatar alt="avatar" src={user?.avatarImageUrl ?? ""} />
        </ListItemAvatar>
        <ListItemText
          primary={user?.name ?? "N/A"}
          secondary={moment(user?.createdAt).calendar()}
        />
      </ListItem>
      <Divider variant="inset" />
    </>
  );
}

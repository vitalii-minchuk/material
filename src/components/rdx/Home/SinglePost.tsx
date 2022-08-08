import { Box, Button, Stack, Typography } from "@mui/material";
import { formatDistanceToNow, parseISO } from "date-fns";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/rdx/hooks";
import { Post, reactionAdded, Reactions } from "../../../redux/Slices/postsSlice";

const emoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

interface ISinglePostProps {
  post: Post;
}

const SinglePost: FC<ISinglePostProps> = ({ post }) => {
  const { users } = useAppSelector((state) => state.users);
  const author = users.filter((user) => user.userId === post.userId);
  const timeAgo = formatDistanceToNow(parseISO(post.createdAt));

  const dispatch = useAppDispatch();

  return (
    <Stack
      p={3}
      spacing={2}
      border="1px solid"
      borderColor="gray.200"
      borderRadius={6}
    >
      <Box justifyContent="space-between">
        <Typography fontSize="14pt" fontWeight={600}>
          {post.title}
        </Typography>
        <Typography fontSize="8pt">
          posted by {author[0]?.name ? author[0].name : "Unknown author"}{" "}
          {timeAgo}
        </Typography>
      </Box>
      <Typography fontSize="10pt">{post.content}</Typography>
      <Box gap={1}>
        {Object.entries(emoji).map(([key, value]) => (
          <Button
            key={key}
            onClick={() => post?.id && dispatch(reactionAdded({id: post.id, reaction: key as keyof Reactions}))}
          >
            {value} {post.reactions[key as keyof Reactions]}
          </Button>
        ))}
      </Box>
    </Stack>
  );
};

export default SinglePost;
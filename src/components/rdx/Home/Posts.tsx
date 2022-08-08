import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../../hooks/rdx/hooks";
import SinglePost from "./SinglePost";

const Posts: FC = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const orderedPosts = posts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  return (
    <Stack p={5}>
      <Typography fontSize="18pt" fontWeight={700} mb={4}>
        Posts
      </Typography>
      <Stack spacing={4}>
      {orderedPosts?.map((item) => (
            <SinglePost key={item.id} post={item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Posts;
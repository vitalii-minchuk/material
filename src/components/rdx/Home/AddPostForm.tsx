import { FC, useState } from "react";
import { Button, FormControl, FormLabel, Input, Select, Stack, MenuItem, SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/rdx/hooks";
import { postAdded } from "../../../redux/Slices/postsSlice";

const AddPostForm: FC = () => {
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const { users } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  const onAddNewPost = () => {
    if (post.title.trim() && post.content.trim()) {
      dispatch(postAdded(post, author));
      setPost({ title: "", content: "" });
    }
  };

  const onSelectAuthor = (event: SelectChangeEvent<string>) => {
    if (event.target.value === "") return;
    setAuthor(event.target.value)
  }

  return (
    <Stack p={5}>
      <FormControl required>
        <FormLabel>Post Title</FormLabel>
        <Input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Post Text</FormLabel>
        <Input
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Author</FormLabel>
        <Select value={author} onChange={(e:  SelectChangeEvent<string>) => onSelectAuthor(e)}>
          <MenuItem value="">Select Author</MenuItem >
          {users.map(user => (
            <MenuItem  key={user.userId} value={user.userId}>{user.name}</MenuItem >
          ))}
        </Select>
      </FormControl>
      <Button onClick={onAddNewPost}>
        Save Post
      </Button>
    </Stack>
  );
};

export default AddPostForm;
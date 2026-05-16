import { Router } from 'express';
import { Post } from '../posts.types';
import { v7 } from 'uuid';


const router = Router();

const posts: Post[] = [
    { id: v7(), title: 'Cloudy weather', text: 'It is dark again' },
    { id: v7(), title: 'Cloudy weather', text: 'It is dark again' }
];

router.get('/', (req, res) => {
    res.status(200).json(posts);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);  
    if (!post) {
        res.status(200).json({error: 'Post with ID ${id} not found' });
    } 
    res.status(200).json(post);
}); 

router.post('/', (req, res) => {
    const { title, text } = req.body;
    if (!title || !text) {
        res.status(400).json({ error: 'Title and text are required' });
        return;
    }
    const newPost: Post = {
        id: v7(),
        title,
        text
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});
    
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);  
    if (!post) {
        res.status(404).json({ error: 'Post with ID ${id} not found' });
        return;
    }
      const { title, text } = req.body;
  if (!title && !text) {
    res.status(400).json({ error: "Bad request. No title or text" });
  }
  if (title) {
    post.title = title;
  }
  if (text) {
    post.text = text;
  }
    res.status(200).json(post);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

     const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ error: `Post with id ${id} not found` });
    throw new Error("Not found");
  }
  const indexOfPost = posts.indexOf(post);
    posts.splice(indexOfPost, 1);

    res.status(204).json();
});

export default router;  
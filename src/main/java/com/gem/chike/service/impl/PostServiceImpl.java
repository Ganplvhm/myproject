package com.gem.chike.service.impl;

import com.gem.chike.service.PostService;
import com.gem.chike.mapper.PostMapper;
import com.gem.chike.pojo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostMapper postMapper;


    @Override
    public List<Posts> selectByCatory(int catoryid) {
        return postMapper.selectPostByCatory(catoryid);
    }

    @Override
    public Posts selectPostById(int postid) { return postMapper.selectByPostId(postid); }

    @Override
    public Poster selectPosterById(int postid) {
        return postMapper.selectPosterById(postid);
    }


    @Override
    public List<Posts> selectPost() {
        return postMapper.selectAllPosts();
    }

    @Override
    public List<PostPic> selectPosterPic(int posterid) {
        return postMapper.selectPosterPics(posterid);
    }

    @Override
    public List<Posts> selectPostsByPosterId(int posterid) {
        return postMapper.selectPostsByPosterId(posterid);
    }


}

package com.gem.chike.service;

import com.gem.chike.pojo.PostPic;
import com.gem.chike.pojo.Poster;
import com.gem.chike.pojo.Posts;
import com.gem.chike.pojo.*;

import java.util.List;

public interface PostService {

    //查询帖子
    List<Posts> selectByCatory(int catoryid);
    //帖子详情
    Posts selectPostById(int postid);
    //发帖人简介
    Poster selectPosterById(int postid);


    List<Posts> selectPost();

    List<PostPic> selectPosterPic(int posterid);

    List<Posts> selectPostsByPosterId(int posterid);
}

package com.gem.chike.mapper;

import com.gem.chike.pojo.PostPic;
import com.gem.chike.pojo.Poster;
import com.gem.chike.pojo.Posts;
import com.gem.chike.pojo.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface PostMapper {
//按照类别查找post信息
    @Select("select * from tb_posts where catoryid=#{param1}")
    List<Posts> selectPostByCatory(int catoryid);
//按照posterid查找tb_poster信息
    @Select("select * from tb_poster where posterid=#{param1}")
    Poster selectPosterById(int posterid);
    //帖子详情
    @Select("select * from tb_posts where postid=#{param1}")
    Posts selectByPostId(int postid);

//查找remen.html显示信息
    @Select("select * from tb_posts where catoryid=1")
    List<Posts> selectAllPosts();
//查找posterIntro的图片
    @Select("select * from tb_postpic where posterid=#{param1} limit 8")
    List<PostPic> selectPosterPics(int posterid);

//    按照posterid查找帖子信息
    @Select("select * from tb_posts where posterid=#{param1} limit 6")
    List<Posts> selectPostsByPosterId(int posterid);
}

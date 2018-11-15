package com.gem.chike.mapper;

import com.gem.chike.pojo.ShoppLun;
import com.gem.chike.pojo.User;
import com.gem.chike.pojo.UserPosts;
import com.gem.chike.pojo.shophf;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface UserMapper {
    void updateUser(String userSex, int userAge, String userEmail, String userAddress, String userPhone, String userName, String userLogoSrc);
    void InsertUser(int userId, String userPwd, String userName, String userPhone);
     User selectUser(String userName, String userPwd);
    void updateUserLogo(User user);
    User selectUserByName(String userName);
    List<UserPosts> selectUserPostByUserName(String userName);
//    PageInfo<UserPosts> selectUserPostByUserName(int curPage,String userName);

    void InsertshopPlun(String pinglun,String userName,String userLogoSrc,String time);
    List<ShoppLun> selectPlun();
    List<shophf> selecthf();
    UserPosts selectUserPost(int userPostId);

    List<UserPosts> selectUserPostAll();
    int selectNewsCount(String userName);

}

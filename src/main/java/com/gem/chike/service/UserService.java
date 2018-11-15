package com.gem.chike.service;


import com.gem.chike.pojo.*;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface UserService {
    void InsertUser(int userId,String userPwd,String userName,String userPhone);
    void InsertshopPlun(String pinglun,String userName,String userLogoSrc,String time);

    User selectUser(String userName, String userPwd);
    List<ShoppLun> selectPlun();

    void updateUser(String userSex, int userAge, String userEmail, String userAddress, String userPhone, String userName, String userLogoSrc);
    PageInfo<News> getUserPostsByUserName(int curPage, String userName);
    //    qy
    void updateUserLogo(User user);

    User getUserByName(String userName);
    List<shophf> selecthf();
    int selectNewsCount(String userName);
    User getUserLeftPage(String userName);
    //11.6  qy
//    List<UserPosts> getUserPostsByUserName(String userName);



    UserPosts getUserPosts(int userPostId);

    List<UserPosts> getUserPostAll();


}


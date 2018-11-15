package com.gem.chike.service.impl;

import com.gem.chike.mapper.UserMapper;
import com.gem.chike.pojo.*;
import com.gem.chike.service.PageService;
import com.gem.chike.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {
@Autowired
    private UserMapper userMapper;
    @Autowired
    private PageService pageService;
    @Override
    public void InsertUser(int userId, String userPwd, String userName, String userPhone) {
        userMapper.InsertUser(userId, userPwd, userName, userPhone);
    }

    @Override
    public void InsertshopPlun(String pinglun, String userName,String userLogoSrc,String time) {
        userMapper.InsertshopPlun(pinglun,userName,userLogoSrc,time);
    }


    @Override
    public User selectUser(String userName, String userPwd) {
        return userMapper.selectUser(userName,userPwd);
    }

//    String userLogoSrc,String userSex,int userAge,String email, String userAddress,String userName
@Override
public void updateUser(String userSex, int userAge, String userEmail, String userAddress, String userPhone, String userName, String userLogoSrc) {
    userMapper.updateUser(userSex, userAge, userEmail, userAddress, userPhone, userName, userLogoSrc);
}
    @Override
    public List<ShoppLun> selectPlun() {
        return userMapper.selectPlun();
    }

    @Override
    public List<shophf> selecthf() {
        return  userMapper.selecthf();
    }
    @Override
    public void updateUserLogo(User user) {
        userMapper.updateUserLogo(user);
    }

    @Override
    public User getUserByName(String userName) {
        return userMapper.selectUserByName(userName);
    }

    @Override
    public User getUserLeftPage(String userName) {
        return userMapper.selectUserByName(userName);
    }

    @Override
    public PageInfo<News> getUserPostsByUserName(int curPage,String userName) {

//        添加分页拦截
        PageHelper.startPage(curPage,6);
        List<News> news=pageService.selectNews();

        PageInfo<News> pageInfo = new PageInfo<>(news);
//        当前页
        pageInfo.setPageNum(curPage);
//        每页条数
        pageInfo.setPageSize(9);
//        总条数
        pageInfo.setTotal(selectNewsCount(userName));
        return pageInfo;

    }

//    11.6 qy
    @Override
    public UserPosts getUserPosts(int userPostId) {
        return userMapper.selectUserPost(userPostId);
    }

    @Override
    public List<UserPosts> getUserPostAll() {
        return userMapper.selectUserPostAll();
    }



    @Override
    public int selectNewsCount(String userName) {
        return userMapper.selectNewsCount(userName);
    }


}

package com.gem.chike.Control;


import com.gem.chike.pojo.*;
import com.gem.chike.service.*;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@Controller
@RequestMapping("/collected")
public class CollectedControl {

    @Autowired
    private CollectedService collectedService;

    @Autowired
    private ShopService1 shopService1;

    @Autowired
    private PostService postService;

    @Autowired
    private FashimgService fashimgService;

    @Autowired
    private UserService userService;

//    商家收藏
    @RequestMapping("/shopCollected")
    public String shopCollected(Model model,String userName,@RequestParam(value = "curPage",defaultValue = "1")int curPage,int shopId){

        Shop shop = shopService1.getShopById(shopId);
        String shopName=shop.getShopName();
        String shopSimpleIntro=shop.getShopSimpleIntro();
        String shopPic=shop.getShopPic();

        System.out.println("收藏的商家名："+shopName+",收藏的商家简介:"+shopSimpleIntro+",收藏的商家的图片路径："+shopPic+",收藏商家的用户名："+userName);
        collectedService.insertCollectedShop(shopId,userName,shopName,shopSimpleIntro,shopPic);

//        model.addAttribute("shopCollecteds",shopCollected);
        System.out.println("收藏成功");


//        PageInfo<ShopCollected> shopCollected = collectedService.getCollectedShop(curPage,userName);
//
//        System.out.println(curPage+"jjjj");
//        for(ShopCollected shopCollected1:shopCollected.getList()){
//            System.out.println(shopCollected1.getShopName()+"====");
//        }
//        model.addAttribute("pageBean",shopCollected);

        //    最新发帖 11.6
        List<UserPosts> userNewPostsList = userService.getUserPostAll();
        User user1 = userService.getUserByName(userName);
        model.addAttribute("userPost",userNewPostsList);

        return "/html/shopCollectedList.html";
    }

//帖子收藏
    @RequestMapping("/postsCollected")
    public String postsCollected(Model model,String userName,@RequestParam(value = "curPage",defaultValue = "1")int curPage,int postid){
        Posts posts = postService.selectPostById(postid);
        String postname=posts.getPostname();
        String postssimpleintro=posts.getPostssimpleintro();
        String postpic=posts.getPostpic();
        System.out.println("收藏的帖子标题："+postname+",收藏的帖子简介:"+postssimpleintro+",收藏的帖子的图片路径："+postpic+",收藏商家的用户名："+userName);
//        List<PostsCollected> postsCollectedList = collectedService.getCollectedPost(userName);
//        for(PostsCollected postsCollected:postsCollectedList){
//            if(postsCollected.getPostname().equals(postname)){
//
//                System.out.println("该帖子已收藏");
//            }else {
//
//                System.out.println("收藏成功");
//
//            }
//        }
        collectedService.insertCollectedPosts(postid,userName, postname, postssimpleintro, postpic);
//        PageInfo<PostsCollected> postsCollected = collectedService.getCollectedPosts(curPage,userName);
//
//        System.out.println(curPage+"jjjj");
//        for(PostsCollected postsCollected1:postsCollected.getList()){
//            System.out.println(postsCollected1.getPostname()+"====");
//        }
//        model.addAttribute("pageBean",postsCollected);

        //    最新发帖 11.6
        List<UserPosts> userNewPostsList = userService.getUserPostAll();
        User user1 = userService.getUserByName(userName);
        model.addAttribute("userPost",userNewPostsList);
        return "/html/postsCollectedList.html";
    }
//    达人关注
    @RequestMapping("/concerned")
    public  String concerned(Model model,@RequestParam(value = "curPage",defaultValue = "1")int curPage,User user){
        PageInfo<FashionerConcerned> fashionerConcerned = collectedService.getCollectedPoster(curPage,user.getUserName());
        System.out.println(curPage+"jjjj");
        for(FashionerConcerned fashionerConcerned1:fashionerConcerned.getList()){
            System.out.println(fashionerConcerned1.getPostername()+"====");
        }
        model.addAttribute("fashioner",fashionerConcerned);

        //    最新发帖 11.6
        List<UserPosts> userNewPostsList = userService.getUserPostAll();
        User user1 = userService.getUserByName(user.getUserName());
        model.addAttribute("userPost",userNewPostsList);
        return "/html/fashionerConcernedList.html";
    }


//    商家收藏
    @RequestMapping("/concerned1")
    public  String concerned1(Model model,@RequestParam(value = "curPage",defaultValue = "1")int curPage,String userName){

        PageInfo<ShopCollected> shopCollected = collectedService.getCollectedShop(curPage,userName);

        System.out.println(curPage+"jjjj");
        for(ShopCollected shopCollected1:shopCollected.getList()){
            System.out.println(shopCollected1.getShopName()+"====");
        }
        model.addAttribute("shop",shopCollected);

        //    最新发帖 11.6
        List<UserPosts> userNewPostsList = userService.getUserPostAll();
        User user1 = userService.getUserByName(userName);
        model.addAttribute("userPost",userNewPostsList);
        return "/html/shopCollectedList.html";
    }
//    帖子收藏
    @RequestMapping("/concerned2")
    public  String concerned2(Model model,@RequestParam(value = "curPage",defaultValue = "1")int curPage,User user){
        PageInfo<PostsCollected> postsCollected = collectedService.getCollectedPosts(curPage,user.getUserName());

        System.out.println(curPage+"jjjj");
        for(PostsCollected postsCollected1:postsCollected.getList()){
            System.out.println(postsCollected1.getPostname()+"====");
        }
        model.addAttribute("pageBean",postsCollected);

        //    最新发帖 11.6
        List<UserPosts> userNewPostsList = userService.getUserPostAll();
        User user1 = userService.getUserByName(user.getUserName());
        model.addAttribute("userPost",userNewPostsList);
        return "/html/postsCollectedList.html";

    }

//达人关注
    @RequestMapping("/fashionerConcerned")
    public String FashionerConcerned(Model model,User user,@RequestParam(value = "curPage",defaultValue = "1")int curPage,int posterid){
        Poster poster = postService.selectPosterById(posterid);
        String postername=poster.getPostername();
        String posterintro=poster.getPosterintro();
        String posterpic=poster.getPosterpic();
        System.out.println("关注的达人标题："+postername+",关注的达人的简介:"+posterintro+",关注的达人的图片路径："+posterpic+",关注达人的用户名："+user.getUserName());
        collectedService.insertCollectedPostse(posterid,user.getUserName(),postername,posterintro,posterpic);

        System.out.println("关注成功");
//        PageInfo<FashionerConcerned> fashionerConcerned = collectedService.getCollectedPoster(curPage,userName);
//
//        System.out.println(curPage+"jjjj");
//        for(FashionerConcerned fashionerConcerned1:fashionerConcerned.getList()){
//            System.out.println(fashionerConcerned1.getPostername()+"====");
//        }
//        model.addAttribute("pageBean",fashionerConcerned);

        //    最新发帖 11.6
        List<UserPosts> userNewPostsList = userService.getUserPostAll();
        User user1 = userService.getUserByName(user.getUserName());
        model.addAttribute("userPost",userNewPostsList);
        return "/html/fashionerConcernedList.html";
    }

}

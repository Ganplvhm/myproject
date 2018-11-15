package com.gem.chike.Control;


import com.gem.chike.pojo.*;
import com.gem.chike.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.util.List;

@Controller
@RequestMapping("/posts")  //发送的请求地址

public class PostControl {
    @Autowired
    private PostService postService;

//    @RequestMapping("/remen")
//    public String remen(Model model){
//        List<Fashimg> fashimgList =  postService.selectByFashimg();
//        model.addAttribute("fashimglist",fashimgList);
//        return "html/remen";
//    }
//
//    @RequestMapping("/jingxuan")
//    public String jingxuan(Model model){
//        List<Shop>  shopList= postService.selectShop();
//        model.addAttribute("shoplist",shopList);
//        return "/html/jingxuan";
//    }
//
//    @RequestMapping("/jiankang")
//    public String jiankang(Model model){
//        List<Posts> posts1=postService.selectHealthByCatory();
//        model.addAttribute("postslist",posts1);//=request.setAttribute("post",posts)  往前台传输据
//        return "/html/jiankang";
//    }
//
//    @RequestMapping("/shiliao")
//    public String shiliao(Model model){
//        List<Posts> posts2=postService.selectCureByCatory();
//        model.addAttribute("postlist",posts2);
//        return "/html/shiliao";
//    }
//
//    @RequestMapping("/kexue")
//    public String kexue(Model model){
//        List<Posts> posts3=postService.selectScienceByCatory();
//        model.addAttribute("plist",posts3);
//        return "/html/kexue";
//    }

    @RequestMapping("/remen")
    public String remen(Model model){
        List<Posts> postsList = postService.selectPost();
        model.addAttribute("posts",postsList);
        return "/html/remen";
    }
    @RequestMapping("/post")
    public String post(int catoryid,Model model){
        List<Posts> postsList = postService.selectByCatory(catoryid);
        System.out.println("传过来的catoryid："+catoryid);
        model.addAttribute("posts",postsList);
        return "/html/remen";
    }

    @RequestMapping("/details")
    public String details(int postid, Model model){
        System.out.println("获得的id"+postid);
        Posts post=postService.selectPostById(postid);
        Poster poster = postService.selectPosterById(post.getPosterid());
        System.out.println(poster.getPostername());
        String posterName=poster.getPostername();
        System.out.println("获得的postername："+posterName);
        model.addAttribute("poster",poster);
        model.addAttribute("posterName",posterName);
        model.addAttribute("posts",post);
        return "/html/details1";
    }

    @RequestMapping("/person")
    public String personal(int posterid,Model model){
        System.out.println("传过来的posterid是："+posterid);
        Poster poster=postService.selectPosterById(posterid);
        List<Posts> posts = postService.selectPostsByPosterId(posterid);
        for(Posts posts1:posts) {
            System.out.println(posts1.getPostpic());
        }
        List<PostPic> postPic = postService.selectPosterPic(posterid);
//        传递发帖人信息
        model.addAttribute("poster",poster);
//        传递发帖人所发帖子的信息
        model.addAttribute("posters",posts);
//        传递发帖人个人信息中的图片信息
        model.addAttribute("posterPic",postPic);
        return "/html/person";
    }


}

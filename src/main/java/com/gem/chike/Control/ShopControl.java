package com.gem.chike.Control;

import com.gem.chike.pojo.*;
import com.gem.chike.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/shop1")
@Controller
public class ShopControl {
    @Autowired
    private ShopService shopService;


    @RequestMapping(value="/shoppic.action")
    public  String shoppic(Model model){
//        11.7  qy
        //       轮播图
        List<RoundPic> roundPicList=shopService.selectRoundTop();
        for(RoundPic roundPic:roundPicList){
            System.out.println(roundPic.getRoundPicSrc()+"====");
        }
        model.addAttribute("roundPics",roundPicList);
//        商家精选
//        List<Shoppic> result=shopService.selectshoppic();
        List<Shop> result = shopService.selectshop();
       model.addAttribute("resultList",result);
//今日精选   前3   前6
        List<Posts>  postsList = shopService.selectPostsTop();
        model.addAttribute("postsTop1",postsList);
        List<Posts> postsList1 = shopService.selectPostsTops();
        model.addAttribute("postsTop2",postsList1);
//        达人感悟
        List<Poster> posterList = shopService.selectPoster();
        model.addAttribute("posters",posterList);
        return "html/firstpage";
    }


    @RequestMapping("/round")
    public String roundMap(Model model){

        return "/html/firstpage.html";
    }
}

package com.gem.chike.Control;

import com.gem.chike.pojo.Shop;
import com.gem.chike.pojo.ShopPic1;
import com.gem.chike.service.ShopService1;

import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


import java.util.List;

@Controller
//@ResponseBody
@RequestMapping("/shop")
public class ShopControl1 {

    @Autowired
    private ShopService1 shopService1;

    @RequestMapping("/page")
    public String pageShop(Model model,@RequestParam(value = "curPage",defaultValue = "1")int curPage){
        PageInfo<Shop> shopList = shopService1.getAllSearchShop(curPage);
        System.out.println(curPage+"jjjj");
        for(Shop shop:shopList.getList()){
            System.out.println(shop.getShopName()+"====");
        }
        model.addAttribute("pageBean",shopList);
        return "html/shop.html";
    }

    @RequestMapping("/shopMain")
    public String mainShop(Model model){
        List<Shop> shopList = shopService1.getAllShop();
        model.addAttribute("shopsList",shopList);

        return "html/shop.html";

    }

    @RequestMapping("/shopCatoryAll")
    public String pageCatoryShop(Model model,@RequestParam(value = "curPage",defaultValue = "1")int curPage, int shopCatory){
        PageInfo<Shop> shopList = shopService1.getCatorySearchShop(curPage,shopCatory);
        System.out.println(curPage+"jjjj");
        for(Shop shop:shopList.getList()){
            System.out.println(shop.getShopName()+"====");
        }
        model.addAttribute("pageBean",shopList);
        return "html/shop.html";
    }

//商家详情查询
    @RequestMapping("/shopMore")
    public String moreShop(Model model, Shop shop, int shopId){
        shop=shopService1.getShopById(shopId);
        Shop shop1 = shopService1.getShopMore(shop.getShopId());
        List<ShopPic1> shopPicList = shopService1.getShopPic(shop1.getShopId());
        model.addAttribute("shopPics",shopPicList);
        model.addAttribute("shopMoreText",shop1);
        return "html/about.html";
    }



    @RequestMapping("/singleShop")
    public String singleShop(@RequestParam(value = "shopName") String shopName, Model model){
        System.out.println(shopName);
        Shop shop = shopService1.getShopByLike(shopName);
        String shopsName=shop.getShopName();
        System.out.println("模糊查询的商家名："+shopsName);
        int id=shopService1.getShopIdByName(shopsName);
        System.out.println("按商家编号查询的商家编号:"+id);
        Shop shop1=shopService1.getShopById(id);
        List<ShopPic1> shopPicList = shopService1.getShopPic(id);
        model.addAttribute("shopPics",shopPicList);
        model.addAttribute("shopMoreText",shop1);
        return "html/about.html";
    }


}

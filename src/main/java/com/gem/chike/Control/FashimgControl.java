package com.gem.chike.Control;

import com.gem.chike.pojo.Fashdetail;
import com.gem.chike.pojo.Fashimg;
import com.gem.chike.service.FashdetailService;
import com.gem.chike.service.FashimgService;
import com.gem.chike.service.Fashmp4Service;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class FashimgControl
{
    @Autowired
private FashimgService fashimgService;
    @Autowired
    private FashdetailService fashdetail;
    @Autowired
    private Fashmp4Service fashmp4Service;

    @RequestMapping(value ="/Fashimg.action")
    public String  Fashimg(Model model){
        List<Fashimg> fashimgList=fashimgService.selectfashimg();
        model.addAttribute("fashimgList",fashimgList);
        List<Fashimg> fashmp4List=fashmp4Service.selectfashmp4();
        model.addAttribute("fashmp4List",fashmp4List);
        return "/html/smartperson";
    }
    @RequestMapping(value ="/Fashdetail1")
    public @ResponseBody String Fashdetail1(HttpServletRequest httpServletRequest){
       int fashionerId =Integer.parseInt(httpServletRequest.getParameter("fashionerId"));
        List<Fashdetail> fashdetailList=fashdetail.selectcards(fashionerId);
        Gson gson=new Gson();
        String response=gson.toJson(fashdetailList);
        System.out.println(response);
        return response;
    }




}

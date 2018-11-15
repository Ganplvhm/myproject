package com.gem.chike.Control;

import com.gem.chike.pojo.News;
import com.gem.chike.pojo.QiNiu;
import com.gem.chike.pojo.User;
import com.gem.chike.pojo.UserPosts;
import com.gem.chike.service.PageService;
import com.google.gson.Gson;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;

import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import com.qiniu.util.StringMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.UUID;

@Controller

public class PageControl {
   @Autowired
    private PageService pageService;

    private static String url;
    @RequestMapping(value = "/getToken", method = RequestMethod.GET)
    public static QiNiu getToken() {
        QiNiu qiNiu = new QiNiu();
        String accessKey = "9zT3hxYjhUdkcJ8hQsthLOQnBKAlckOqNXkpzS2Q";
        String secretKey = "EBEb1dTzYrqizJ_zb02ZxRlZmC6EOf_zRnJxia5F";
        String bucket = "icheck";
        long expireSeconds = 600;   //过期时间
        StringMap putPolicy = new StringMap();
        Auth auth = Auth.create(accessKey, secretKey);
        String upToken = auth.uploadToken(bucket,null, expireSeconds,putPolicy);
        qiNiu.setKey(UUID.randomUUID().toString().replaceAll("\\-", ""));
        qiNiu.setToken(upToken);
        return qiNiu;
    };




    @RequestMapping(value = "/saveWangeditorImg",method = RequestMethod.POST)
    public @ResponseBody static String uploadQiNiu(@RequestParam("uploadImage") MultipartFile myFileName,UserPosts userPosts) throws Exception{

        InputStream stream = myFileName.getInputStream();
        Configuration cfg = new Configuration(Zone.zone0());
        UploadManager uploadManager = new UploadManager(cfg);
        QiNiu token = getToken();
        Response response = uploadManager.put(stream,token.getKey(),token.getToken(),null, null);
        DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);
        url = "http://ph584gplc.bkt.clouddn.com/"+token.getKey();
//        String userPostTitle,String userPostSimpleContent,String userPostContent,String userPostImg,String userName

        return "{\"errno\":0,\"data\":[\""+url+"\"]}";
    }
    @RequestMapping(value = "/newspost.action",method = RequestMethod.POST)
    public String newspost(News news, HttpServletRequest request, User user) throws ServletException, IOException {
        System.out.println(url);
        String id=UUID.randomUUID().toString().replaceAll("-","");
        news.setId(id);
        news.setCreateTime(new Date());
        news.setUserName(user.getUserName());
        news.setUserpostSrc(url);
        pageService.insertNews(news);
        request.getServletContext().setAttribute("news",news);
        return "forward:toper";
    }
        @RequestMapping(value = "/toper")
        public String personal(){
            return "forward:personal";
        }
    @RequestMapping(value = "/infor.action")
    public String listNewsById(String id,Model model) throws ServletException, IOException {
        News new1 =pageService.selectById(id);
        model.addAttribute("news",new1);
        return "html/infor.html";

    }
    }


//    显示全部的新闻














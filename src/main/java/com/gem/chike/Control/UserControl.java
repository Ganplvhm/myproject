package com.gem.chike.Control;

import com.gem.chike.pojo.*;
import com.gem.chike.service.UserService;
import com.gem.miaodiyun.httpApiDemo.AccountInfo;
import com.gem.miaodiyun.httpApiDemo.IndustrySMS;
import com.github.pagehelper.PageInfo;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@SessionAttributes("user")
@Controller
public class UserControl {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/getYanMa.action" )

    public  @ResponseBody
    List<Object> getYanMa(String phone, HttpServletRequest request){


        int num= (int)((Math.random()*9+1)*100000);
//        短信内容,根据注册的模板 例如"【项目中心】您的验证码为23456，请于2分钟内正确输入，如非本人操作，请忽略此短信。"

        String Content="【爱吃客官网】您的验证码为"+num+"，请于30分钟内正确输入，如非本人操作，请忽略此短信。";



        AccountInfo.execute();
        IndustrySMS industrySMS=new IndustrySMS(phone,Content);
        String resJson=industrySMS.execute();
        List<Object> result=new ArrayList<>();
        result.add(num);
        result.add(resJson);
        return result;

    }

    @RequestMapping("/register.action")
    public String register(User user,Model model){
        int userId= (int)((Math.random()*9+1)*100000);
        model.addAttribute("user1",user);
        String userName=user.getUserName();
        String userPwd=user.getUserPwd();
        String userPhone=user.getUserPhone();
        userService.InsertUser(userId, userPwd, userName, userPhone);
        return "/html/login";
    }


    @RequestMapping("/login.action")
    public String login(Model model,String userName,String userPwd){

        System.out.println("获得的用户名："+userName+"获得用户密码："+userPwd);
        User user1=userService.selectUser(userName,userPwd);
        System.out.println(user1);
        if(user1!=null){
            //登陆成功
            //往session域中方用户名
            model.addAttribute("user",user1);
            System.out.println("登录成功");
            return "forward:/shop1/shoppic.action";//读取数据库的资源并在首页显示,重定向
        }else{
            model.addAttribute("user1",user1);
            System.out.println("登录失败");
            model.addAttribute("loginError","1");
            return "/html/login";//转发
        }
    }

    @RequestMapping("/loginout.action")
    public String loginOut(SessionStatus sessionStatus){  //SpringMVC 自动注入请求的参数,名字一摸一样 ,与对象的属性名一致
        sessionStatus.setComplete();//将session移除
        return "html/login.html";
    }

    //gp
    @RequestMapping("/iframe")
    public String iframe(User user, Model model)
    {
        String userName=user.getUserName();
        User user1=userService.getUserByName(userName);
        System.out.println(user1);
        String userLogoSrc=user1.getUserLogoSrc();
        model.addAttribute("userLogoSrc",userLogoSrc);
        return  "html/update.html";
    }
    @RequestMapping("/userlogo")
    public @ResponseBody String userlogo(HttpServletRequest httpServletRequest)
    {
        String userName=httpServletRequest.getParameter("userName");
        User user1=userService.getUserByName(userName);
        List<Object> userpList=new ArrayList<>();
        userpList.add(user1);
        Gson gson=new Gson();
        String response=gson.toJson(userpList);
        System.out.println(response);
        return response;
    }
    @RequestMapping("/userping")
    public @ResponseBody String userping(HttpServletRequest httpServletRequest,User user)
    {
        String userName=httpServletRequest.getParameter("userName");
        String pinglun=httpServletRequest.getParameter("pinglun");
        String time=httpServletRequest.getParameter("time");
        System.out.println(pinglun);
        System.out.println(userName);
        System.out.println(time);
        userService.InsertshopPlun(pinglun,userName,user.getUserLogoSrc(),time);
        return "null";
    }
    @RequestMapping("/userpLun")
    public @ResponseBody String userpLun()
    {
        List<ShoppLun> shoppLunList=userService.selectPlun();
        Gson gson=new Gson();
        String response1=gson.toJson(shoppLunList);
        System.out.println(response1);
        return response1;
    }
    @RequestMapping("/userhp")
    public @ResponseBody String userhp(User user)
    {
        List<shophf> shophfList=userService.selecthf();
        Gson gson=new Gson();
        String response3=gson.toJson(shophfList);
        System.out.println(response3);
        return response3;
    }


    @RequestMapping("/updateuser")
    public  String updateuser(User user, MultipartFile file, HttpServletRequest request) throws IOException {
        String userName=user.getUserName();
        String userSex=user.getUserSex();
        int userAge=user.getUserAge();
        String userAddress=user.getUserAddress();
        String userEmail=user.getUserEmail();
        String userPhone=user.getUserPhone();
        if(file!=null||file.getOriginalFilename()!=null||!file.getOriginalFilename().trim().equals("")){
            //        获得图片的名字
            String name=file.getOriginalFilename();
            //     在d:盘上传图片(修改名字,重新uuid随机生成)
            String ip=request.getHeader("Host").split(":")[0];
            String newFile1="D:/upload/"+ip;
            String filen=ip+"/"+ UUID.randomUUID().toString().replace("-","")+""+name;
            String newFile="D:/upload/"+filen;
            System.out.println(filen);
            File file11=new File(newFile1);
            file11.mkdirs();//创建文件夹 ip
            File file1=new File(newFile);
            file.transferTo(file1);
            file1.createNewFile();//创建图片
            String userLogoSrc=filen;
            userService.updateUser(userSex,userAge,userEmail,userAddress,userPhone,userName,userLogoSrc);


            //拷贝图片
        }
        return "forward:iframe";
    }



    @RequestMapping("/personal")
    public String personal(@RequestParam(value = "curPage",defaultValue = "1")int curPage,User user,String userName,Model model){
        System.out.println("获得的userName:"+user.getUserName());
        userName = user.getUserName();
        System.out.println("传递的userName:"+userName);
//        查询用户帖子信息
//        List<UserPosts> userPostsList = userService.getUserPostsByUserName(userName);
        PageInfo<News> userPostsList = userService.getUserPostsByUserName(curPage,userName);
        System.out.println(curPage+"<----personalPosts");
        for(News news:userPostsList.getList()){
            System.out.println(news.getUserName()+"====");
        }

        User personalLeftPage = userService.getUserLeftPage(userName);
//        传递personal页面左边栏的信息查询
        model.addAttribute("person",personalLeftPage);
//        传递personal右边正文中帖子的信息
        model.addAttribute("pageBean",userPostsList);

//    最新发帖 11.6
        List<UserPosts> userNewPostsList = userService.getUserPostAll();
        User user1 = userService.getUserByName(userName);
        model.addAttribute("userPost",userNewPostsList);
//        传递用户信息
        model.addAttribute("users",user1);
        System.out.println("获得的用户的性别是："+user1.getUserSex());
        return "html/personal.html";
    }


    //    11.6
//    发帖
    @RequestMapping("/mail")
    public String toMail(){
        return "html/mail.html";
    }

//    帖子详情
    @RequestMapping("/personalArticle")
    public String personalArticle(Model model,int userPostId){
        System.out.println("获得的用户帖子的Id:"+userPostId);

        UserPosts userPost = userService.getUserPosts(userPostId);
        System.out.println("获得帖子的题目："+userPost.getUserPostTitle());
        model.addAttribute("userPost",userPost);
        return "html/talkTester.html";
    }

//    存档
    @RequestMapping("/save")
    public String toSave(){
        return "html/save.html";
    }


}


package com.gem.chike.mvc;




import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


//WebMvcConfigurer contrl的增强配置,比如过滤器,文件上传等,control时会先执行他
//springMVC.xml的替代品
@Configuration
public class SpringBootMVC implements WebMvcConfigurer {
    //虚拟路径配置
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
//        给html添加一个control,让html可以访问
//        给/html/login.html添加一个名为toLogin的control,自动添加
        registry.addViewController("/toLogin").setViewName("/html/login.html");
        registry.addViewController("/").setViewName("/html/login.html");
        registry.addViewController("/toregister").setViewName("/html/register");
        registry.addViewController("/topersonal").setViewName("/html/personalInfo");
        registry.addViewController("/toindex").setViewName("/html/index");
        registry.addViewController("/tohome").setViewName("/html/firstpage");
        registry.addViewController("/tofashion").setViewName("/html/smartperson");
        registry.addViewController("/todetail").setViewName("/html/details");
        registry.addViewController("/toqiniu").setViewName("/html/test");
        registry.addViewController("/tous").setViewName("/html/aboutus");
        registry.addViewController("/toqiniu").setViewName("/html/test");
        registry.addViewController("/tofabu").setViewName("/html/fabu");
    }




}

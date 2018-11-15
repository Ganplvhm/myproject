package com.gem.chike.Control;



import com.gem.chike.pojo.Log;
import com.gem.chike.service.LogService;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.util.List;

@Controller
@SessionAttributes("log")

public class LogControl {
        @Autowired
        private LogService logService;

@RequestMapping("/log")
public String log( Model model){
    List<Log> logs = logService.getAllLog();
    model.addAttribute("glog",logs);
    return "/html/log";
}

    @RequestMapping("/Logcontent")
    public String logcontent( Model model ,int logId){
       Log log = logService.MoreLog(logId);
       model.addAttribute("logmore",log);
        return "/html/logcontent";
    }
    @RequestMapping("/logpage")
    public String pagelog(Model model, @RequestParam(value = "curPage",defaultValue = "1")int curPage){
        System.out.println(curPage);
        PageInfo<Log> logPage = logService.getPage(curPage);
        System.out.println(logPage.isIsFirstPage());
        System.out.println(curPage+"jjjj");
        for(Log log:logPage.getList()){
            System.out.println(log.getLogTitle()+"");

        }
        model.addAttribute("pageBean",logPage);

        return "/html/log";


    }

//    @RequestMapping("/tperson")
//    public String tperson(Model model,int userId){
//
//
//    }

}

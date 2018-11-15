package com.gem.chike.Control;



import com.gem.chike.pojo.Topic;
import com.gem.chike.service.TopicService;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;


@Controller
@SessionAttributes("topic")
public class TopicControl {
    @Autowired
    private TopicService topicService;
//    @RequestMapping("/topic")
//    public String topicMain(Model model){
//        List<Topic> topics = topicService.getAllTopic();
//        model.addAttribute("gtopic",topics);
//        return "/html/topic";
//
//    }


    @RequestMapping("/Topiccontent")
    public String topiccontent(Model model,int topicId){
        Topic topics = topicService.getTopicMore(topicId);
       model.addAttribute("more",topics);
        System.out.println(topics);
        return "/html/topiccontent";

    }
    @RequestMapping("/topic")
    public String topicpage(Model model, @RequestParam(value = "curPage",defaultValue = "1")int curPage ){
        System.out.println(curPage);
        PageInfo<Topic> topicpage = topicService.gettpage(curPage);
        System.out.println(topicpage.isIsFirstPage());
        System.out.println(curPage+"jjjj");
        for(Topic topic:topicpage.getList()){
            System.out.println(topic.getTopicIntro()+"");

        }
        model.addAttribute("pageBean",topicpage);

        return "/html/topic";
    }
}

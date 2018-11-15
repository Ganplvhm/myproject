package com.gem.chike.service;



import com.gem.chike.pojo.Topic;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface TopicService {
   List<Topic> getAllTopic();

   Topic getTopicMore(int topicId);

   int tcount();

   PageInfo<Topic> gettpage(int curPage);

}

package com.gem.chike.mapper;



import com.gem.chike.pojo.Topic;

import java.util.List;


public interface TopicMapper {

    List<Topic> getTopic();

   Topic getTopicMore(int topicId);

   int  topicCount();
}

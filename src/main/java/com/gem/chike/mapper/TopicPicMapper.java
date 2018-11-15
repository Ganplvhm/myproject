package com.gem.chike.mapper;



import com.gem.chike.pojo.TopicPic;

import java.util.List;

public interface TopicPicMapper {
    List<TopicPic> getPic(int topicId);
}

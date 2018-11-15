package com.gem.chike.service.impl;


import com.gem.chike.mapper.TopicMapper;
import com.gem.chike.mapper.TopicPicMapper;
import com.gem.chike.pojo.Topic;
import com.gem.chike.pojo.TopicPic;
import com.gem.chike.service.TopicService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicServiceImpl implements TopicService {
    @Autowired
    private TopicMapper topicMapper;
    @Autowired
    private TopicPicMapper picMapper;
    @Override
    public List<Topic> getAllTopic(){
       List<Topic> topicList = topicMapper.getTopic();
       for(Topic topic:topicList){
           List<TopicPic> picList=picMapper.getPic(topic.getTopicId());
           topic.setTopicPics(picList);
       }
       return topicList;
    }

    @Override
    public Topic getTopicMore(int topicId) {
        Topic topic = topicMapper.getTopicMore(topicId);
        List<TopicPic> picList=picMapper.getPic(topicId);
        topic.setTopicPics(picList);

        return topic;
    }

    @Override
    public int tcount() {
        return topicMapper.topicCount();
    }

    @Override
    public PageInfo<Topic> gettpage(int curPage) {
        int count = topicMapper.topicCount();
        System.out.println(count);
        PageHelper.startPage(curPage,5);
        List<Topic> topicpage = topicMapper.getTopic();
        for(Topic topic:topicpage){
            List<TopicPic> picList=picMapper.getPic(topic.getTopicId());
            topic.setTopicPics(picList);
        }
        PageInfo<Topic> pageInfo = new PageInfo<>(topicpage);
        pageInfo.setPageNum(curPage);
        pageInfo.setPageSize(5);
        pageInfo.setTotal(count);
        return pageInfo;
    }


}

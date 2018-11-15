package com.gem.chike.service.impl;

import com.gem.chike.mapper.PageMapper;
import com.gem.chike.pojo.News;
import com.gem.chike.service.PageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PageServiceImpl implements PageService {
    @Autowired
    private PageMapper pageMapper;

    @Override
    public void insertNews(News news) {
     pageMapper.insertNews(news);

    }

    @Override
    public News selectById(String nid) {
        return pageMapper.selectById(nid);
    }

    @Override
    public List<News> selectNews() {

        return pageMapper.selectNews();
    }
}

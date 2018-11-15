package com.gem.chike.service;

import com.gem.chike.pojo.News;

import java.util.List;

public interface PageService {
    public void insertNews(News news);
    public News selectById(String nid);
    public List<News> selectNews();
}

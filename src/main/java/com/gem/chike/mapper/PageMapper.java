package com.gem.chike.mapper;


import com.gem.chike.pojo.News;

import java.util.List;

public interface PageMapper {
    public void insertNews(News news);
    public News selectById(String nid);
    public List<News> selectNews();
}

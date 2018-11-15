package com.gem.chike.service.impl;


import com.gem.chike.mapper.LogMapper;
import com.gem.chike.pojo.Log;
import com.gem.chike.service.LogService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogServiceImpl implements LogService {
  @Autowired
  private LogMapper logMapper;
    @Override
    public List<Log> getAllLog() {
        return logMapper.getAllLog( );
  }

    @Override
    public Log MoreLog(int logId) {
       Log log = logMapper.logMore(logId);

       return log;

    }

    @Override
    public int count() {
        return logMapper.logMorecount();
    }


    @Override
    public PageInfo<Log> getPage(int curPage) {
        int count = logMapper.logMorecount();
        System.out.println(count);
        PageHelper.startPage(curPage,5);
        List<Log> logpage = logMapper.getAllLog();
        PageInfo<Log> pageInfo = new PageInfo<>(logpage);
        pageInfo.setPageNum(curPage);
        pageInfo.setPageSize(5);
        pageInfo.setTotal(count);

        return pageInfo;

    }


}

package com.gem.chike.service;

import com.gem.chike.pojo.Log;
import com.github.pagehelper.PageInfo;

import java.util.List;

public interface LogService {
     List<Log> getAllLog();

    Log MoreLog(int logId);

     int count();

     PageInfo<Log> getPage(int curPage);

}

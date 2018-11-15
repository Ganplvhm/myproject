package com.gem.chike.mapper;



import com.gem.chike.pojo.Log;

import java.util.List;


public interface LogMapper {


   List<Log> getAllLog();

   Log logMore(int logId);

   int logMorecount();


}
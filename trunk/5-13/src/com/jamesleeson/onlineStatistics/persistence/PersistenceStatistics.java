package com.jamesleeson.onlineStatistics.persistence;

public class PersistenceStatistics {

	// 次方法暂时不用
	public static long readData(String witch) {
		return 0;
	}

	// 默认读取访问量
	public static long readData() {
		return PersistenceStatisticsFileUtil.readData();
	}

	// key暂时没用
	public static void persistentData(String key, long allViewNum) {
		PersistenceStatisticsFileUtil.persistentData(allViewNum);
	}

}

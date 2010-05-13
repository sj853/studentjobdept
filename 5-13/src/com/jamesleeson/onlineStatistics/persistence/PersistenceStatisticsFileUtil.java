package com.jamesleeson.onlineStatistics.persistence;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;

public class PersistenceStatisticsFileUtil{

	//private static String path = "../WEB-INF/classesTrafficMonitor.txt";
	// 默认读取访问量
	public static long readData() {
		String lastStr = "0";
		File trafficMonitor = new File(path);
		System.out.println(trafficMonitor.getAbsolutePath());
		String path = trafficMonitor.getAbsolutePath();
		trafficMonitor.getAbsolutePath().substring(0,path.length())
		try {
			FileReader fr = new FileReader(trafficMonitor);
			BufferedReader br = new BufferedReader(fr);
			String preLineStr = null;
			String currentLineStr = null;
			while ((currentLineStr = br.readLine()) != null) {
				preLineStr = currentLineStr;
			}
			Pattern pattern = Pattern.compile("[@]+");// 一个或者多个@
			String[] result = pattern.split(preLineStr);
			lastStr = result[1];

			/*
			 * StringTokenizer st = new StringTokenizer(preLineStr, "@"); while
			 * (st.hasMoreTokens()) { lastStr = st.nextToken(); }
			 */
			br.close();
			fr.close();

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return Long.parseLong(lastStr);

	}
	// key暂时没有
	public static void persistentData(String key, long allViewNum) {
//		File trafficMonitor = new File(path);
		File trafficMonitor = new File(path);
		FileWriter fw;
		try {
			fw = new FileWriter(trafficMonitor, true);// true=追加方式
			BufferedWriter bw = new BufferedWriter(fw);
			bw.write(key + "@" + allViewNum + "\n");
			bw.flush();
			bw.close();
			fw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void persistentData(long allViewNum) {
		File trafficMonitor = new File(path);
		FileWriter fw;
		try {
			fw = new FileWriter(trafficMonitor, true);// true=追加方式
			BufferedWriter bw = new BufferedWriter(fw);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm");
			bw.write(sdf.format(new Date()) + "@" + allViewNum + "\n");
			bw.flush();
			bw.close();
			fw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}

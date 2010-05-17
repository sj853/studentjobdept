package com.jamesleeson.onlineStatistics.persistence;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;

public class PersistenceStatisticsFileUtil {

	private String classPath;
	private String path;

	public PersistenceStatisticsFileUtil() {
		this.classPath = this.getClass().getResource("/").getPath();
		this.path = classPath
				+ "com/jamesleeson/onlineStatistics/persistence/TrafficMonitor.txt";
		path = path.replaceAll("%20", " ");
	}

	public void persistentData(long allViewNum) {
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

	// key暂时没有
	public void persistentData(String key, long allViewNum) {
		// File trafficMonitor = new File(path);
		File trafficMonitor = new File(path);
		FileWriter fw;
		try {
			fw = new FileWriter(trafficMonitor, true);// true=追加方式
			BufferedWriter bw = new BufferedWriter(fw);
			bw.write(key + "@" + allViewNum + "\n");
			bw.flush();
System.out.println("seconde");
			bw.close();
			fw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// 默认读取访问量
	public long readData() {
		String lastStr = "0";
		File trafficMonitor = new File(path);
		if (!trafficMonitor.exists()) {
			try {
				trafficMonitor.createNewFile();
				//初始化文件
//				FileWriter writer = new FileWriter(trafficMonitor);
//				BufferedWriter bufWriter = new BufferedWriter(writer);
//				bufWriter.write("0@0");
//				bufWriter.flush();
//				bufWriter.close();
				
			} catch (IOException e) {
				e.printStackTrace();
			}
			return 0;
		} 
		else{
			
		
System.out.println(trafficMonitor.getAbsolutePath());
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
				 * StringTokenizer st = new StringTokenizer(preLineStr, "@");
				 * while (st.hasMoreTokens()) { lastStr = st.nextToken(); }
				 */
				br.close();
				fr.close();
				return Long.parseLong(lastStr);
			} catch (FileNotFoundException e) {
				e.printStackTrace();
				return 0;
			} catch (IOException e) {
				e.printStackTrace();
				return 0;
			}
		
		}
	}

}

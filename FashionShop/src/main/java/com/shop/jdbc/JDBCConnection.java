package com.shop.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnection {

    public static Connection getJDBCConnection() {
        Connection connection = null;
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String user = "sa";
            String pass = "123";
            String url = "jdbc:sqlserver://localhost:1433;databaseName=UNIFY";
            connection = DriverManager.getConnection(url, user, pass);
            System.out.println(connection);

        } catch (ClassNotFoundException | SQLException ex) {
            ex.printStackTrace();
        }

        return connection;
    }

    public static void main(String[] args) {
        System.out.println(getJDBCConnection());
    }
}

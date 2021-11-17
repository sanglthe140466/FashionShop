package com.shop.controller;

import com.shop.model.Product;
import com.shop.service.CategoryService;
import com.shop.service.ProductService;
import com.shop.service.impl.CategoryServiceImpl;
import com.shop.service.impl.ProductServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = "/welcome")

public class WellcomeController extends HttpServlet {

    ProductService productService = new ProductServiceImpl();
    CategoryService cateService = new CategoryServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Product> productList = productService.getAll();
        req.setAttribute("pwelcome", productList);
        req.getRequestDispatcher("/view/client/view/index.jsp").forward(req, resp);
    }
}

package com.shop.controller;

import com.shop.model.Product;
import com.shop.service.CategoryService;
import com.shop.service.ProductService;
import com.shop.service.impl.CategoryServiceImpl;
import com.shop.service.impl.ProductServiceImpl;
import java.io.IOException;
import java.util.List;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = {"/product/list"})
public class ProductListClientController extends HttpServlet {

    ProductService productService = new ProductServiceImpl();
    CategoryService cateService = new CategoryServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Product> productList = productService.getAll();
        req.setAttribute("productList", productList);
        RequestDispatcher dispatcher = req.getRequestDispatcher("/view/client/view/product-list.jsp");
        dispatcher.forward(req, resp);
    }
}

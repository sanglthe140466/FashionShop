package com.shop.controller;

import com.shop.model.Product;
import com.shop.service.ProductService;
import com.shop.service.impl.ProductServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@SuppressWarnings("serial")
@WebServlet(urlPatterns = "/product/seach")
public class ProductSeachByName extends HttpServlet {

    ProductService productService = new ProductServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        List<Product> productSeachByName = productService.seachByName(name);
        req.setAttribute("productSeachByName", productSeachByName);
        req.getRequestDispatcher("/view/client/view/product-seach-by-name.jsp").forward(req, resp);
    }
}

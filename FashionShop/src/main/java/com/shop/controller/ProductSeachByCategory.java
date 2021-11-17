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
@WebServlet(urlPatterns = "/product/category")
public class ProductSeachByCategory extends HttpServlet {

    ProductService productService = new ProductServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String cate_id = req.getParameter("cate_id");
        List<Product> productSeachByCategory = productService.seachByCategory(Integer.parseInt(cate_id));
        req.setAttribute("productSeachByCategory", productSeachByCategory);
        req.getRequestDispatcher("/view/client/view/productSeachByCategory.jsp").forward(req, resp);
    }
}

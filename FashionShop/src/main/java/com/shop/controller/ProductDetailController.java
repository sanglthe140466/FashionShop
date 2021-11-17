package com.shop.controller;

import com.shop.model.Category;
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
@WebServlet(urlPatterns = "/product/detail")
public class ProductDetailController extends HttpServlet {

    ProductService productService = new ProductServiceImpl();
    CategoryService categoryService = new CategoryServiceImpl();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        Product product = productService.get(Integer.parseInt(id));
        List<Category> categories = categoryService.getAll();
        req.setAttribute("categories", categories);
        req.setAttribute("product", product);
        RequestDispatcher dispatcher = req.getRequestDispatcher("/view/client/view/product-detail.jsp");
        dispatcher.forward(req, resp);
    }

}

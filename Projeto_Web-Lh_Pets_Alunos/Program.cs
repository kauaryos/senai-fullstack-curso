using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;

namespace Projeto_Web_Lh_Pets_versao_1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();
            app.MapGet("/", () => "Projeto Web - LH Pets versão 1");
            app.UseStaticFiles();
            app.MapGet("/index", (HttpContext contexto) => {
                contexto.Response.Redirect("index.html", false);
            });

            Banco dba = new Banco();
            app.MapGet("/listaClientes", (HttpContext contexto) => {
                contexto.Response.WriteAsync(dba.GetListaString());
            });

            app.Run();
        }
    }

    class Banco
    {
        private List<Clientes> lista = new List<Clientes>();

        public List<Clientes> GetLista()
        {
            return lista;
        }

        public Banco()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder
                {
                    UserID = "sa",
                    Password = "12345",
                    DataSource = "localhost\\SQLEXPRESS",
                    InitialCatalog = "vendas",
                    IntegratedSecurity = false
                };

                using (SqlConnection conexao = new SqlConnection(builder.ConnectionString))
                {
                    string sql = "SELECT * FROM tblclientes";
                    using (SqlCommand comando = new SqlCommand(sql, conexao

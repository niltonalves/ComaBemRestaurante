using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using source.Data.Context;

namespace source
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

 
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddCors();

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite("Data Source=Data\\Sqlite\\ComaBem.db"));
            
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1).
                AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore).
                AddJsonOptions((options => options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore));
        }

       
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //permissão para acesso a partir do front
            app.UseCors(builder => builder.WithOrigins("http://localhost:4200") 
                                .AllowAnyMethod()
                                .AllowAnyHeader());

            app.UseMvc();
        }
    }
}

using System.Web.Optimization;

namespace WebApplication2.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jsBundle")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/FutureMoney.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/bootstrap.css"));
        }
    }
}
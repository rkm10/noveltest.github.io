<?php require '../assets/sections/page-head.php' ?>
<?php require '../assets/sections/thanks-page-analytics.php' ?>

<script>
  (function(w,d,t,r,u)
  {
    var f,n,i;
    w[u]=w[u]||[],f=function()
    {
      var o={ti:"343091180", enableAutoSpaTracking: true}; 
      o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad") 
    },
    n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
    {
      var s=this.readyState;
      s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
    },
    i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
  })
  (window,document,"script","//bat.bing.com/bat.js","uetq");
</script>


</head>

<body id="<?php echo $pageName ?>">
    <?php require '../assets/sections/header.php' ?>
    <?php require '../assets/sections/thanksbanner.php' ?>
    <?php require '../assets/sections/footer.php' ?>
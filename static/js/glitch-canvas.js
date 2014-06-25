




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>IG7/static/js/glitch-canvas.js at a9806bc489edd783207027582775a5566838248a · jopreibisch/IG7</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jopreibisch/IG7" name="twitter:title" /><meta content="IG7 - Bachelor project of interaction design" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/5700738?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/5700738?s=400" property="og:image" /><meta content="jopreibisch/IG7" property="og:title" /><meta content="https://github.com/jopreibisch/IG7" property="og:url" /><meta content="IG7 - Bachelor project of interaction design" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C1C49E68:4106:2C94449:53AABD0E" name="octolytics-dimension-request_id" /><meta content="5700738" name="octolytics-actor-id" /><meta content="jopreibisch" name="octolytics-actor-login" /><meta content="d0a2832e07a442d8fbd384be14e527fd3756c6ee33f05ebfe378346d68ebee15" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="h+Mc9K89kVNh0CGPZjUBW5KOwPZKPCn2KR4APQX+tS1SgyebsN9H8CFNc740hQ4b2O19ZB6iX82YsPugakSmyQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-c13b2c9e805745ba25729ccbf701703a88a37633.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-610e09133bdefe7a970a593f7b1115354a053fb5.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="9d9078acbd825ce7ac563d90854d6769">

      
  <meta name="description" content="IG7 - Bachelor project of interaction design" />


  <meta content="5700738" name="octolytics-dimension-user_id" /><meta content="jopreibisch" name="octolytics-dimension-user_login" /><meta content="17544154" name="octolytics-dimension-repository_id" /><meta content="jopreibisch/IG7" name="octolytics-dimension-repository_nwo" /><meta content="false" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="17544154" name="octolytics-dimension-repository_network_root_id" /><meta content="jopreibisch/IG7" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jopreibisch/IG7/commits/a9806bc489edd783207027582775a5566838248a.atom?token=5700738__eyJzY29wZSI6IkF0b206L2pvcHJlaWJpc2NoL0lHNy9jb21taXRzL2E5ODA2YmM0ODllZGQ3ODMyMDcwMjc1ODI3NzVhNTU2NjgzODI0OGEuYXRvbSIsImV4cGlyZXMiOjI5ODE2MjE2NDZ9--8e1c1e04d3516d9e7f2f357003a78a4710defcc6" rel="alternate" title="Recent Commits to IG7:a9806bc489edd783207027582775a5566838248a" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-private page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="jopreibisch"
      data-repo="jopreibisch/IG7"
      data-branch="a9806bc489edd783207027582775a5566838248a"
      data-sha="cc8eaeefc19e6765b4720cd8afcccb1104c8b52b"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="jopreibisch/IG7" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/jopreibisch" class="name">
        <img alt="jopreibisch" class=" js-avatar" data-user="5700738" height="20" src="https://avatars3.githubusercontent.com/u/5700738?s=140" width="20" /> jopreibisch
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="jopreibisch/IG7">This repository</span>
    </li>
      <li>
        <a href="/jopreibisch/IG7/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
      <li>
        <a href="/jopreibisch/IG7/settings/collaboration"><span class="octicon octicon-person"></span> New collaborator</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="LsjjrA/GgnkU99MvdPKDOZLS23LPxfA2C0SoMVkobct0phoccGTwtZIFsxaBIR9dvdJMBVFpLgugjPgbjYEhSw==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="17544154" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/jopreibisch/IG7/watchers">
        1
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Unwatch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/jopreibisch/IG7/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="3l5FBJcI4TO8vXQRTqZQ9ZtniIFVElxoW6+AjcZo8logTPDAIDRxnPMrK2y/7hqULZVzk2dDEK/PqKDFbQXmJQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar jopreibisch/IG7">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jopreibisch/IG7/stargazers">
          0
        </a>
</form>
    <form accept-charset="UTF-8" action="/jopreibisch/IG7/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="v3zd3doS49r6+WnZeihvWL2fjt9v3JXgi77MVRT/lor/VCJ2VCMZ2Kx2ciK8bEvgBySqK4sSC/psEJSXn/G9tQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star jopreibisch/IG7">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/jopreibisch/IG7/stargazers">
          0
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/jopreibisch/IG7/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of jopreibisch/IG7 to your account" aria-label="Fork your own copy of jopreibisch/IG7 to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/jopreibisch/IG7/network" class="social-count">0</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title private">
          <span class="repo-label"><span>private</span></span>
          <span class="mega-octicon octicon-lock"></span>
          <span class="author"><a href="/jopreibisch" class="url fn" itemprop="url" rel="author"><span itemprop="title">jopreibisch</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jopreibisch/IG7" class="js-current-repository js-repo-home-link">IG7</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jopreibisch/IG7" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jopreibisch/IG7">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jopreibisch/IG7/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /jopreibisch/IG7/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jopreibisch/IG7/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /jopreibisch/IG7/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/jopreibisch/IG7/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /jopreibisch/IG7/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jopreibisch/IG7/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jopreibisch/IG7/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jopreibisch/IG7/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jopreibisch/IG7/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/jopreibisch/IG7/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /jopreibisch/IG7/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


      <div class="sunken-menu-separator"></div>
      <ul class="sunken-menu-group">
        <li class="tooltipped tooltipped-w" aria-label="Settings">
          <a href="/jopreibisch/IG7/settings" aria-label="Settings" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_settings /jopreibisch/IG7/settings">
            <span class="octicon octicon-tools"></span> <span class="full-word">Settings</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
      </ul>
  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=push">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jopreibisch/IG7.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jopreibisch/IG7.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=push">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:jopreibisch/IG7.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:jopreibisch/IG7.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=push">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jopreibisch/IG7" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jopreibisch/IG7" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/jopreibisch/IG7" class="minibutton sidebar-button" title="Save jopreibisch/IG7 to your computer and use it in GitHub Desktop." aria-label="Save jopreibisch/IG7 to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/jopreibisch/IG7/archive/a9806bc489edd783207027582775a5566838248a.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download jopreibisch/IG7 as a zip file"
                   title="Download jopreibisch/IG7 as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/jopreibisch/IG7/blob/a9806bc489edd783207027582775a5566838248a/static/js/glitch-canvas.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:efede10784b71881877eba5ba39c0747 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref=""
    title=""
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>tree:</i>
    <span class="js-select-button css-truncate-target">a9806bc489</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jopreibisch/IG7/blob/master/static/js/glitch-canvas.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <form accept-charset="UTF-8" action="/jopreibisch/IG7/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="3K1SQM8w0etHW25qeZ4RzTYWpDLtEcNbb6YWGPrGx7OoFbqfrHY06IG/PH5kPdSbjxjzy73kk47ctwAeM4f1ew==" /></div>
            <span class="octicon octicon-git-branch select-menu-item-icon"></span>
            <div class="select-menu-item-text">
              <h4>Create branch: <span class="js-new-item-name"></span></h4>
              <span class="description">from ‘a9806bc’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="a9806bc489edd783207027582775a5566838248a" />
            <input type="hidden" name="path" id="path" value="static/js/glitch-canvas.js" />
          </form> <!-- /.select-menu-item -->

      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/jopreibisch/IG7/find/a9806bc489edd783207027582775a5566838248a"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="static/js/glitch-canvas.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jopreibisch/IG7/tree/a9806bc489edd783207027582775a5566838248a" data-branch="a9806bc489edd783207027582775a5566838248a" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">IG7</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jopreibisch/IG7/tree/a9806bc489edd783207027582775a5566838248a/static" data-branch="a9806bc489edd783207027582775a5566838248a" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">static</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jopreibisch/IG7/tree/a9806bc489edd783207027582775a5566838248a/static/js" data-branch="a9806bc489edd783207027582775a5566838248a" data-direction="back" data-pjax="true" itemscope="url" rel="nofollow"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">glitch-canvas.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/jopreibisch/IG7/contributors/a9806bc489edd783207027582775a5566838248a/static/js/glitch-canvas.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>308 lines (260 sloc)</span>
          <span class="meta-divider"></span>
        <span>7.032 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be on a branch to make or propose changes to this file">Edit</a>
          <a href="/jopreibisch/IG7/raw/a9806bc489edd783207027582775a5566838248a/static/js/glitch-canvas.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/jopreibisch/IG7/blame/a9806bc489edd783207027582775a5566838248a/static/js/glitch-canvas.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/jopreibisch/IG7/commits/a9806bc489edd783207027582775a5566838248a/static/js/glitch-canvas.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be on a branch to make or propose changes to this file">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*global define, module*/</span></div><div class='line' id='LC2'><span class="c1">//! glitch-canvas by snorpey, MIT License</span></div><div class='line' id='LC3'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span> <span class="nb">window</span><span class="p">,</span> <span class="nx">factory</span> <span class="p">)</span></div><div class='line' id='LC4'><span class="p">{</span></div><div class='line' id='LC5'>	<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span> <span class="p">)</span></div><div class='line' id='LC6'>	<span class="p">{</span></div><div class='line' id='LC7'>		<span class="nx">define</span><span class="p">(</span> <span class="nx">factory</span> <span class="p">);</span></div><div class='line' id='LC8'>	<span class="p">}</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>	<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="p">)</span></div><div class='line' id='LC11'>	<span class="p">{</span></div><div class='line' id='LC12'>		<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">();</span></div><div class='line' id='LC13'>	<span class="p">}</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>	<span class="k">else</span></div><div class='line' id='LC16'>	<span class="p">{</span></div><div class='line' id='LC17'>		<span class="nb">window</span><span class="p">.</span><span class="nx">glitch</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">();</span></div><div class='line' id='LC18'>	<span class="p">}</span></div><div class='line' id='LC19'><span class="p">}(</span></div><div class='line' id='LC20'>	<span class="k">this</span><span class="p">,</span></div><div class='line' id='LC21'>	<span class="kd">function</span> <span class="p">()</span></div><div class='line' id='LC22'>	<span class="p">{</span></div><div class='line' id='LC23'>		<span class="c1">// create two canvases and contexts </span></div><div class='line' id='LC24'>		<span class="kd">var</span> <span class="nx">canvas_1</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span> <span class="s1">&#39;canvas&#39;</span> <span class="p">);</span></div><div class='line' id='LC25'>		<span class="kd">var</span> <span class="nx">canvas_2</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span> <span class="s1">&#39;canvas&#39;</span> <span class="p">);</span></div><div class='line' id='LC26'>		<span class="kd">var</span> <span class="nx">ctx_1</span> <span class="o">=</span> <span class="nx">canvas_1</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span> <span class="s1">&#39;2d&#39;</span> <span class="p">);</span></div><div class='line' id='LC27'>		<span class="kd">var</span> <span class="nx">ctx_2</span> <span class="o">=</span> <span class="nx">canvas_2</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span> <span class="s1">&#39;2d&#39;</span> <span class="p">);</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>		<span class="kd">var</span> <span class="nx">base64_chars</span> <span class="o">=</span> <span class="s1">&#39;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/&#39;</span><span class="p">;</span></div><div class='line' id='LC30'>		<span class="kd">var</span> <span class="nx">base64_map</span> <span class="o">=</span> <span class="nx">base64_chars</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span></div><div class='line' id='LC31'>		<span class="kd">var</span> <span class="nx">reversed_base64_map</span> <span class="o">=</span> <span class="p">{</span> <span class="p">};</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>		<span class="kd">var</span> <span class="nx">params</span><span class="p">;</span></div><div class='line' id='LC34'>		<span class="kd">var</span> <span class="nx">base64</span><span class="p">;</span></div><div class='line' id='LC35'>		<span class="kd">var</span> <span class="nx">byte_array</span><span class="p">;</span></div><div class='line' id='LC36'>		<span class="kd">var</span> <span class="nx">jpg_header_length</span><span class="p">;</span></div><div class='line' id='LC37'>		<span class="kd">var</span> <span class="nx">img</span><span class="p">;</span></div><div class='line' id='LC38'>		<span class="kd">var</span> <span class="nx">new_image_data</span><span class="p">;</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>		<span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC41'>		<span class="kd">var</span> <span class="nx">len</span><span class="p">;</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>		<span class="nx">base64_map</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">key</span> <span class="p">)</span> <span class="p">{</span> <span class="nx">reversed_base64_map</span><span class="p">[</span><span class="nx">val</span><span class="p">]</span> <span class="o">=</span> <span class="nx">key</span><span class="p">;</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>		<span class="kd">function</span> <span class="nx">glitchImageData</span> <span class="p">(</span> <span class="nx">image_data</span><span class="p">,</span> <span class="nx">parameters</span><span class="p">,</span> <span class="nx">callback</span> <span class="p">)</span></div><div class='line' id='LC46'>		<span class="p">{</span></div><div class='line' id='LC47'>			<span class="k">if</span> <span class="p">(</span></div><div class='line' id='LC48'>				<span class="nx">isValidImageData</span><span class="p">(</span> <span class="nx">image_data</span> <span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC49'>				<span class="nx">checkType</span><span class="p">(</span> <span class="nx">parameters</span><span class="p">,</span> <span class="s1">&#39;parameters&#39;</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span> <span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC50'>				<span class="nx">checkType</span><span class="p">(</span> <span class="nx">callback</span><span class="p">,</span> <span class="s1">&#39;callback&#39;</span><span class="p">,</span> <span class="s1">&#39;function&#39;</span> <span class="p">)</span></div><div class='line' id='LC51'>			<span class="p">)</span></div><div class='line' id='LC52'>			<span class="p">{</span></div><div class='line' id='LC53'>				<span class="c1">// normalize parameters</span></div><div class='line' id='LC54'>				<span class="nx">params</span> <span class="o">=</span> <span class="nx">getNormalizedParameters</span><span class="p">(</span> <span class="nx">parameters</span> <span class="p">);</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>				<span class="c1">// resize temp canvases to size of imagedata object</span></div><div class='line' id='LC57'>				<span class="nx">resizeCanvas</span><span class="p">(</span> <span class="nx">canvas_1</span><span class="p">,</span> <span class="nx">image_data</span> <span class="p">);</span></div><div class='line' id='LC58'>				<span class="nx">resizeCanvas</span><span class="p">(</span> <span class="nx">canvas_2</span><span class="p">,</span> <span class="nx">image_data</span> <span class="p">);</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>				<span class="c1">// convert imageData to byte array and get jpg header size</span></div><div class='line' id='LC61'>				<span class="nx">base64</span> <span class="o">=</span> <span class="nx">getBase64FromImageData</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">,</span> <span class="nx">params</span><span class="p">.</span><span class="nx">quality</span> <span class="p">);</span></div><div class='line' id='LC62'>				<span class="nx">byte_array</span> <span class="o">=</span> <span class="nx">base64ToByteArray</span><span class="p">(</span> <span class="nx">base64</span> <span class="p">);</span></div><div class='line' id='LC63'>				<span class="nx">jpg_header_length</span> <span class="o">=</span> <span class="nx">getJpegHeaderSize</span><span class="p">(</span> <span class="nx">byte_array</span> <span class="p">);</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>				<span class="c1">// change bytes in the bytearray</span></div><div class='line' id='LC66'>				<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">iterations</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span></div><div class='line' id='LC67'>				<span class="p">{</span></div><div class='line' id='LC68'>					<span class="nx">glitchJpegBytes</span><span class="p">(</span></div><div class='line' id='LC69'>						<span class="nx">byte_array</span><span class="p">,</span></div><div class='line' id='LC70'>						<span class="nx">jpg_header_length</span><span class="p">,</span></div><div class='line' id='LC71'>						<span class="nx">params</span><span class="p">.</span><span class="nx">seed</span><span class="p">,</span></div><div class='line' id='LC72'>						<span class="nx">params</span><span class="p">.</span><span class="nx">amount</span><span class="p">,</span></div><div class='line' id='LC73'>						<span class="nx">i</span><span class="p">,</span></div><div class='line' id='LC74'>						<span class="nx">params</span><span class="p">.</span><span class="nx">iterations</span></div><div class='line' id='LC75'>					<span class="p">);</span></div><div class='line' id='LC76'>				<span class="p">}</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>				<span class="c1">// 1. convert glitched byteArray to base64 URL.</span></div><div class='line' id='LC79'>				<span class="c1">// 2. set base64 URL as src of an image</span></div><div class='line' id='LC80'>				<span class="c1">// 3. put image on canvas and get imageData of canvas</span></div><div class='line' id='LC81'>				<span class="c1">// 4. call callback, pass imageData as argument</span></div><div class='line' id='LC82'>				<span class="nx">img</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Image</span><span class="p">();</span></div><div class='line' id='LC83'>				<span class="nx">img</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span></div><div class='line' id='LC84'>				<span class="p">{</span></div><div class='line' id='LC85'>					<span class="nx">ctx_1</span><span class="p">.</span><span class="nx">drawImage</span><span class="p">(</span> <span class="nx">img</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC86'>					<span class="nx">new_image_data</span> <span class="o">=</span> <span class="nx">ctx_1</span><span class="p">.</span><span class="nx">getImageData</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">height</span> <span class="p">);</span></div><div class='line' id='LC87'>					<span class="nx">callback</span><span class="p">(</span> <span class="nx">new_image_data</span> <span class="p">);</span></div><div class='line' id='LC88'>				<span class="p">};</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>				<span class="nx">img</span><span class="p">.</span><span class="nx">src</span> <span class="o">=</span> <span class="nx">byteArrayToBase64</span><span class="p">(</span> <span class="nx">byte_array</span> <span class="p">);</span></div><div class='line' id='LC91'>			<span class="p">}</span></div><div class='line' id='LC92'>		<span class="p">}</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>		<span class="kd">function</span> <span class="nx">resizeCanvas</span><span class="p">(</span> <span class="nx">canvas</span><span class="p">,</span> <span class="nx">size</span> <span class="p">)</span></div><div class='line' id='LC95'>		<span class="p">{</span></div><div class='line' id='LC96'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">!==</span> <span class="nx">size</span><span class="p">.</span><span class="nx">width</span> <span class="p">)</span></div><div class='line' id='LC97'>			<span class="p">{</span></div><div class='line' id='LC98'>				<span class="nx">canvas</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="nx">size</span><span class="p">.</span><span class="nx">width</span><span class="p">;</span></div><div class='line' id='LC99'>			<span class="p">}</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">!==</span> <span class="nx">size</span><span class="p">.</span><span class="nx">height</span> <span class="p">)</span></div><div class='line' id='LC102'>			<span class="p">{</span></div><div class='line' id='LC103'>				<span class="nx">canvas</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="nx">size</span><span class="p">.</span><span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC104'>			<span class="p">}</span></div><div class='line' id='LC105'>		<span class="p">}</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>		<span class="kd">function</span> <span class="nx">glitchJpegBytes</span><span class="p">(</span> <span class="nx">byte_array</span><span class="p">,</span> <span class="nx">jpg_header_length</span><span class="p">,</span> <span class="nx">seed</span><span class="p">,</span> <span class="nx">amount</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">len</span> <span class="p">)</span></div><div class='line' id='LC108'>		<span class="p">{</span></div><div class='line' id='LC109'>			<span class="kd">var</span> <span class="nx">max_index</span> <span class="o">=</span> <span class="nx">byte_array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">jpg_header_length</span> <span class="o">-</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC110'>			<span class="kd">var</span> <span class="nx">px_min</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span> <span class="nx">max_index</span> <span class="o">/</span> <span class="nx">len</span> <span class="o">*</span> <span class="nx">i</span><span class="p">,</span> <span class="mi">10</span> <span class="p">);</span></div><div class='line' id='LC111'>			<span class="kd">var</span> <span class="nx">px_max</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span> <span class="nx">max_index</span> <span class="o">/</span> <span class="nx">len</span> <span class="o">*</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span> <span class="p">),</span> <span class="mi">10</span> <span class="p">);</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>			<span class="kd">var</span> <span class="nx">delta</span> <span class="o">=</span> <span class="nx">px_max</span> <span class="o">-</span> <span class="nx">px_min</span><span class="p">;</span></div><div class='line' id='LC114'>			<span class="kd">var</span> <span class="nx">px_i</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span> <span class="nx">px_min</span> <span class="o">+</span> <span class="nx">delta</span> <span class="o">*</span> <span class="nx">seed</span><span class="p">,</span> <span class="mi">10</span> <span class="p">);</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">px_i</span> <span class="o">&gt;</span> <span class="nx">max_index</span> <span class="p">)</span></div><div class='line' id='LC117'>			<span class="p">{</span></div><div class='line' id='LC118'>				<span class="nx">px_i</span> <span class="o">=</span> <span class="nx">max_index</span><span class="p">;</span></div><div class='line' id='LC119'>			<span class="p">}</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>			<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span> <span class="nx">jpg_header_length</span> <span class="o">+</span> <span class="nx">px_i</span> <span class="p">);</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>			<span class="nx">byte_array</span><span class="p">[</span><span class="nx">index</span><span class="p">]</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span> <span class="nx">amount</span> <span class="o">*</span> <span class="mi">256</span> <span class="p">);</span></div><div class='line' id='LC124'>		<span class="p">}</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'>		<span class="kd">function</span> <span class="nx">getBase64FromImageData</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">,</span> <span class="nx">quality</span> <span class="p">)</span></div><div class='line' id='LC127'>		<span class="p">{</span></div><div class='line' id='LC128'>			<span class="kd">var</span> <span class="nx">q</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">quality</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">quality</span> <span class="o">&lt;</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">quality</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">quality</span> <span class="o">:</span> <span class="mf">0.1</span><span class="p">;</span></div><div class='line' id='LC129'>			<span class="nx">ctx_2</span><span class="p">.</span><span class="nx">putImageData</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC130'>			<span class="k">return</span> <span class="nx">canvas_2</span><span class="p">.</span><span class="nx">toDataURL</span><span class="p">(</span> <span class="s1">&#39;image/jpeg&#39;</span><span class="p">,</span> <span class="nx">q</span> <span class="p">);</span></div><div class='line' id='LC131'>		<span class="p">}</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>		<span class="kd">function</span> <span class="nx">getJpegHeaderSize</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span></div><div class='line' id='LC134'>		<span class="p">{</span></div><div class='line' id='LC135'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="mi">417</span><span class="p">;</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>			<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span></div><div class='line' id='LC138'>			<span class="p">{</span></div><div class='line' id='LC139'>				<span class="k">if</span> <span class="p">(</span></div><div class='line' id='LC140'>					<span class="nx">data</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="mh">0xFF</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC141'>					<span class="nx">data</span><span class="p">[</span><span class="nx">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="mh">0xDA</span></div><div class='line' id='LC142'>				<span class="p">)</span></div><div class='line' id='LC143'>				<span class="p">{</span></div><div class='line' id='LC144'>					<span class="nx">result</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">+</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC145'>					<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC146'>				<span class="p">}</span></div><div class='line' id='LC147'>			<span class="p">}</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC150'>		<span class="p">}</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>		<span class="c1">// https://github.com/mutaphysis/smackmyglitchupjs/blob/master/glitch.html</span></div><div class='line' id='LC153'>		<span class="c1">// base64 is 2^6, byte is 2^8, every 4 base64 values create three bytes</span></div><div class='line' id='LC154'>		<span class="kd">function</span> <span class="nx">base64ToByteArray</span><span class="p">(</span> <span class="nx">str</span> <span class="p">)</span></div><div class='line' id='LC155'>		<span class="p">{</span></div><div class='line' id='LC156'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[</span> <span class="p">];</span></div><div class='line' id='LC157'>			<span class="kd">var</span> <span class="nx">digit_num</span><span class="p">;</span></div><div class='line' id='LC158'>			<span class="kd">var</span> <span class="nx">cur</span><span class="p">;</span></div><div class='line' id='LC159'>			<span class="kd">var</span> <span class="nx">prev</span><span class="p">;</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>			<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">23</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span></div><div class='line' id='LC162'>			<span class="p">{</span></div><div class='line' id='LC163'>				<span class="nx">cur</span> <span class="o">=</span> <span class="nx">reversed_base64_map</span><span class="p">[</span> <span class="nx">str</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span> <span class="nx">i</span> <span class="p">)</span> <span class="p">];</span></div><div class='line' id='LC164'>				<span class="nx">digit_num</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">-</span> <span class="mi">23</span> <span class="p">)</span> <span class="o">%</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>				<span class="k">switch</span> <span class="p">(</span> <span class="nx">digit_num</span> <span class="p">)</span></div><div class='line' id='LC167'>				<span class="p">{</span></div><div class='line' id='LC168'>					<span class="c1">// case 0: first digit - do nothing, not enough info to work with</span></div><div class='line' id='LC169'>					<span class="k">case</span> <span class="mi">1</span><span class="o">:</span> <span class="c1">// second digit</span></div><div class='line' id='LC170'>						<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">prev</span> <span class="o">&lt;&lt;</span> <span class="mi">2</span> <span class="o">|</span> <span class="nx">cur</span> <span class="o">&gt;&gt;</span> <span class="mi">4</span> <span class="p">);</span></div><div class='line' id='LC171'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>					<span class="k">case</span> <span class="mi">2</span><span class="o">:</span> <span class="c1">// third digit</span></div><div class='line' id='LC174'>						<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">(</span> <span class="nx">prev</span> <span class="o">&amp;</span> <span class="mh">0x0f</span> <span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">4</span> <span class="o">|</span> <span class="nx">cur</span> <span class="o">&gt;&gt;</span> <span class="mi">2</span> <span class="p">);</span></div><div class='line' id='LC175'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>					<span class="k">case</span> <span class="mi">3</span><span class="o">:</span> <span class="c1">// fourth digit</span></div><div class='line' id='LC178'>						<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">(</span> <span class="nx">prev</span> <span class="o">&amp;</span> <span class="mi">3</span> <span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">6</span> <span class="o">|</span> <span class="nx">cur</span> <span class="p">);</span></div><div class='line' id='LC179'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC180'>				<span class="p">}</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>				<span class="nx">prev</span> <span class="o">=</span> <span class="nx">cur</span><span class="p">;</span></div><div class='line' id='LC183'>			<span class="p">}</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC186'>		<span class="p">}</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>		<span class="kd">function</span> <span class="nx">byteArrayToBase64</span><span class="p">(</span> <span class="nx">arr</span> <span class="p">)</span></div><div class='line' id='LC189'>		<span class="p">{</span></div><div class='line' id='LC190'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[</span> <span class="s1">&#39;data:image/jpeg;base64,&#39;</span> <span class="p">];</span></div><div class='line' id='LC191'>			<span class="kd">var</span> <span class="nx">byte_num</span><span class="p">;</span></div><div class='line' id='LC192'>			<span class="kd">var</span> <span class="nx">cur</span><span class="p">;</span></div><div class='line' id='LC193'>			<span class="kd">var</span> <span class="nx">prev</span><span class="p">;</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>			<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span></div><div class='line' id='LC196'>			<span class="p">{</span></div><div class='line' id='LC197'>				<span class="nx">cur</span> <span class="o">=</span> <span class="nx">arr</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC198'>				<span class="nx">byte_num</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">%</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>				<span class="k">switch</span> <span class="p">(</span> <span class="nx">byte_num</span> <span class="p">)</span></div><div class='line' id='LC201'>				<span class="p">{</span></div><div class='line' id='LC202'>					<span class="k">case</span> <span class="mi">0</span><span class="o">:</span> <span class="c1">// first byte</span></div><div class='line' id='LC203'>						<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">base64_map</span><span class="p">[</span> <span class="nx">cur</span> <span class="o">&gt;&gt;</span> <span class="mi">2</span> <span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC204'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC205'>					<span class="k">case</span> <span class="mi">1</span><span class="o">:</span> <span class="c1">// second byte</span></div><div class='line' id='LC206'>						<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">base64_map</span><span class="p">[(</span> <span class="nx">prev</span> <span class="o">&amp;</span> <span class="mi">3</span> <span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">4</span> <span class="o">|</span> <span class="p">(</span> <span class="nx">cur</span> <span class="o">&gt;&gt;</span> <span class="mi">4</span> <span class="p">)]</span> <span class="p">);</span></div><div class='line' id='LC207'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC208'>					<span class="k">case</span> <span class="mi">2</span><span class="o">:</span> <span class="c1">// third byte</span></div><div class='line' id='LC209'>						<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">base64_map</span><span class="p">[(</span> <span class="nx">prev</span> <span class="o">&amp;</span> <span class="mh">0x0f</span> <span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">2</span> <span class="o">|</span> <span class="p">(</span> <span class="nx">cur</span> <span class="o">&gt;&gt;</span> <span class="mi">6</span> <span class="p">)]</span> <span class="p">);</span></div><div class='line' id='LC210'>						<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">base64_map</span><span class="p">[</span><span class="nx">cur</span> <span class="o">&amp;</span> <span class="mh">0x3f</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC211'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC212'>				<span class="p">}</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>				<span class="nx">prev</span> <span class="o">=</span> <span class="nx">cur</span><span class="p">;</span></div><div class='line' id='LC215'>			<span class="p">}</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">byte_num</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span></div><div class='line' id='LC218'>			<span class="p">{</span></div><div class='line' id='LC219'>				<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">base64_map</span><span class="p">[(</span> <span class="nx">prev</span> <span class="o">&amp;</span> <span class="mi">3</span> <span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">4</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC220'>				<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="s1">&#39;==&#39;</span> <span class="p">);</span></div><div class='line' id='LC221'>			<span class="p">}</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">byte_num</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">)</span></div><div class='line' id='LC224'>			<span class="p">{</span></div><div class='line' id='LC225'>				<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">base64_map</span><span class="p">[(</span> <span class="nx">prev</span> <span class="o">&amp;</span> <span class="mh">0x0f</span> <span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">2</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC226'>				<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="s1">&#39;=&#39;</span> <span class="p">);</span></div><div class='line' id='LC227'>			<span class="p">}</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>			<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span> <span class="s1">&#39;&#39;</span> <span class="p">);</span></div><div class='line' id='LC230'>		<span class="p">}</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>		<span class="kd">function</span> <span class="nx">getImageDataCopy</span><span class="p">(</span> <span class="nx">image_data</span> <span class="p">)</span></div><div class='line' id='LC233'>		<span class="p">{</span></div><div class='line' id='LC234'>			<span class="kd">var</span> <span class="nx">copy</span> <span class="o">=</span> <span class="nx">ctx_2</span><span class="p">.</span><span class="nx">createImageData</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">height</span> <span class="p">);</span></div><div class='line' id='LC235'>			<span class="nx">copy</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">data</span> <span class="p">);</span></div><div class='line' id='LC236'>			<span class="k">return</span> <span class="nx">copy</span><span class="p">;</span></div><div class='line' id='LC237'>		<span class="p">}</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>		<span class="kd">function</span> <span class="nx">getNormalizedParameters</span> <span class="p">(</span> <span class="nx">parameters</span> <span class="p">)</span></div><div class='line' id='LC240'>		<span class="p">{</span></div><div class='line' id='LC241'>			<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC242'>				<span class="nx">seed</span><span class="o">:</span>       <span class="p">(</span> <span class="nx">parameters</span><span class="p">.</span><span class="nx">seed</span>       <span class="o">||</span> <span class="mi">0</span> <span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC243'>				<span class="nx">quality</span><span class="o">:</span>    <span class="p">(</span> <span class="nx">parameters</span><span class="p">.</span><span class="nx">quality</span>    <span class="o">||</span> <span class="mi">0</span> <span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC244'>				<span class="nx">amount</span><span class="o">:</span>     <span class="p">(</span> <span class="nx">parameters</span><span class="p">.</span><span class="nx">amount</span>     <span class="o">||</span> <span class="mi">0</span> <span class="p">)</span> <span class="o">/</span> <span class="mi">100</span><span class="p">,</span></div><div class='line' id='LC245'>				<span class="nx">iterations</span><span class="o">:</span> <span class="p">(</span> <span class="nx">parameters</span><span class="p">.</span><span class="nx">iterations</span> <span class="o">||</span> <span class="mi">0</span> <span class="p">)</span></div><div class='line' id='LC246'>			<span class="p">};</span></div><div class='line' id='LC247'>		<span class="p">}</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>		<span class="kd">function</span> <span class="nx">isValidImageData</span><span class="p">(</span> <span class="nx">image_data</span> <span class="p">)</span></div><div class='line' id='LC250'>		<span class="p">{</span></div><div class='line' id='LC251'>			<span class="k">if</span> <span class="p">(</span></div><div class='line' id='LC252'>				<span class="nx">checkType</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">,</span> <span class="s1">&#39;image_data&#39;</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span> <span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC253'>				<span class="nx">checkType</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">width</span><span class="p">,</span> <span class="s1">&#39;image_data.width&#39;</span><span class="p">,</span> <span class="s1">&#39;number&#39;</span> <span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC254'>				<span class="nx">checkType</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">height</span><span class="p">,</span> <span class="s1">&#39;image_data.height&#39;</span><span class="p">,</span> <span class="s1">&#39;number&#39;</span> <span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC255'>				<span class="nx">checkType</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span> <span class="s1">&#39;image_data.data&#39;</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span> <span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC256'>				<span class="nx">checkType</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="s1">&#39;image_data.data.length&#39;</span><span class="p">,</span> <span class="s1">&#39;number&#39;</span> <span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC257'>				<span class="nx">checkNumber</span><span class="p">(</span> <span class="nx">image_data</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="s1">&#39;image_data.data.length&#39;</span><span class="p">,</span> <span class="nx">isPositive</span><span class="p">,</span> <span class="s1">&#39;&gt; 0&#39;</span> <span class="p">)</span></div><div class='line' id='LC258'>			<span class="p">)</span></div><div class='line' id='LC259'>			<span class="p">{</span></div><div class='line' id='LC260'>				<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC261'>			<span class="p">}</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>			<span class="k">else</span></div><div class='line' id='LC264'>			<span class="p">{</span></div><div class='line' id='LC265'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC266'>			<span class="p">}</span></div><div class='line' id='LC267'>		<span class="p">}</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>		<span class="kd">function</span> <span class="nx">checkType</span><span class="p">(</span> <span class="nx">it</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">expected_type</span> <span class="p">)</span></div><div class='line' id='LC270'>		<span class="p">{</span></div><div class='line' id='LC271'>			<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">it</span> <span class="o">===</span> <span class="nx">expected_type</span> <span class="p">)</span></div><div class='line' id='LC272'>			<span class="p">{</span></div><div class='line' id='LC273'>				<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC274'>			<span class="p">}</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'>			<span class="k">else</span></div><div class='line' id='LC277'>			<span class="p">{</span></div><div class='line' id='LC278'>				<span class="nx">error</span><span class="p">(</span> <span class="nx">it</span><span class="p">,</span> <span class="s1">&#39;typeof &#39;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">,</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">expected_type</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">,</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="k">typeof</span> <span class="nx">it</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="p">);</span></div><div class='line' id='LC279'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC280'>			<span class="p">}</span></div><div class='line' id='LC281'>		<span class="p">}</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'>		<span class="kd">function</span> <span class="nx">checkNumber</span><span class="p">(</span> <span class="nx">it</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">condition</span><span class="p">,</span> <span class="nx">condition_name</span> <span class="p">)</span></div><div class='line' id='LC284'>		<span class="p">{</span></div><div class='line' id='LC285'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">condition</span><span class="p">(</span> <span class="nx">it</span> <span class="p">)</span> <span class="o">===</span> <span class="kc">true</span> <span class="p">)</span></div><div class='line' id='LC286'>			<span class="p">{</span></div><div class='line' id='LC287'>				<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC288'>			<span class="p">}</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>			<span class="k">else</span></div><div class='line' id='LC291'>			<span class="p">{</span></div><div class='line' id='LC292'>				<span class="nx">error</span><span class="p">(</span> <span class="nx">it</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">condition_name</span><span class="p">,</span> <span class="s1">&#39;not&#39;</span> <span class="p">);</span></div><div class='line' id='LC293'>			<span class="p">}</span></div><div class='line' id='LC294'>		<span class="p">}</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>		<span class="kd">function</span> <span class="nx">isPositive</span><span class="p">(</span> <span class="nx">nr</span> <span class="p">)</span></div><div class='line' id='LC297'>		<span class="p">{</span></div><div class='line' id='LC298'>			<span class="k">return</span> <span class="p">(</span> <span class="nx">nr</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC299'>		<span class="p">}</span></div><div class='line' id='LC300'><br/></div><div class='line' id='LC301'>		<span class="kd">function</span> <span class="nx">error</span><span class="p">(</span> <span class="nx">it</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">expected</span><span class="p">,</span> <span class="nx">result</span> <span class="p">)</span></div><div class='line' id='LC302'>		<span class="p">{</span></div><div class='line' id='LC303'>			<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span> <span class="p">(</span> <span class="s1">&#39;glitch(): Expected &#39;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39; to be &#39;</span> <span class="o">+</span> <span class="nx">expected</span> <span class="o">+</span> <span class="s1">&#39;, but it was &#39;</span> <span class="o">+</span> <span class="nx">result</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span> <span class="p">);</span></div><div class='line' id='LC304'>		<span class="p">}</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'>		<span class="k">return</span> <span class="nx">glitchImageData</span><span class="p">;</span></div><div class='line' id='LC307'>	<span class="p">}</span></div><div class='line' id='LC308'><span class="p">));</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.06975s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-c85c7d256d6752ab84e05736cbda35b953bf535c.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-b0b5cb7fc368e24412dcdc153d59b1df7c48a8dd.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>


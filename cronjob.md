# Setup cronjob

Command:

```bash
* * * * * /usr/local/bin/php /path-to-your-project/artisan schedule:run >> /dev/null 2>&1
```

Check our Cronjob set up instruction in Admin -> Platform administration -> Cronjob.

## For cPanel hosting

For setting up a cron job in cPanel, watch this video tutorial:

<iframe width="100%" height="400" src="https://www.youtube.com/embed/t5mjWGegE-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## For Hostinger.com

* Go to Dashboard -> Advanced -> Cron Jobs

![Image](./images/cronjob-setup-on-hostinger.png)

* Verify your cronjob is running or not.

![Image](./images/cronjob-verify.png)

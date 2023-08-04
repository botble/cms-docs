# Analytics

Integrate with Google Analytics

### Getting credentials

- Video tutorial:
  <iframe width="560" height="315" src="https://www.youtube.com/embed/lsx-HLJhoIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Go to [https://console.developers.google.com/apis/dashboard](https://console.developers.google.com/apis/dashboard) and
  create a new project.

![Image](https://live.staticflickr.com/65535/51598079433_00e2dcbcb7_b.jpg)

![Image](https://live.staticflickr.com/65535/51598521599_b1be3d9eb3_b.jpg)

- Select your project and click on **"ENABLE APIS AND SERVICES"**:

![Image](https://live.staticflickr.com/65535/51597862401_4d78f3e8fb_b.jpg)

- Enable API:

![Image](https://live.staticflickr.com/65535/51597042652_8f9f67fc14_b.jpg)

![Image](https://live.staticflickr.com/65535/51598079238_cb0592a3d2_b.jpg)

![Image](https://live.staticflickr.com/65535/51597042477_6c0eb974c5_b.jpg)

- Generate service account key:

![Image](https://live.staticflickr.com/65535/51598092848_d9c13736da_b.jpg)

![Image](https://live.staticflickr.com/65535/51598099773_9b8ec11521_b.jpg)

![Image](https://live.staticflickr.com/65535/51597861926_5cee160ab1_b.jpg)

![Image](https://live.staticflickr.com/65535/51597042047_311601b409_b.jpg)

![Image](https://live.staticflickr.com/65535/51598078593_17f8ffe786_b.jpg)

- Open JSON file and copy its content, then go to **Admin -> Settings -> General (/admin/settings/general)** and update
  field **"Service Account Credentials"** in Analytics plugin settings by the content from JSON file:

It will look like this:

![Image](https://live.staticflickr.com/65535/51598520879_3d216f5d9b_b.jpg)

### Setting Google Analytics

- Go to Google Analytics account: https://analytics.google.com/analytics/web/. Click on "Admin" => "View Settings" and
  copy "View ID" number, then go to /admin/settings/general and tab "Google Analytics" and paste to field View ID.

::: warning
Note: Change in Google Analytics 4 property.
:::

When creating a new property, you need to check the "Create a Universal Analytics Property" checkbox.

![Image](https://live.staticflickr.com/65535/51598078418_7594dc9603_b.jpg)

Then you will have view settings tab and **View ID**.

![Image](https://live.staticflickr.com/65535/51597041702_1f999a9151_b.jpg)

- Open JSON credentials file and copy client email. Then click on "User management" and add that email to list account.
  Just need view only permission.

![Image](https://live.staticflickr.com/65535/51598756130_3491f2de47_b.jpg)

![Image](https://live.staticflickr.com/65535/51597861276_cbafa75e75_b.jpg)

### Setup timezone and clear cache

- Go to Admin -> Settings -> General and setup timezone to your local timezone.
  ![Image](https://live.staticflickr.com/65535/51598755980_243d6eabe3_b.jpg)

- Go to Admin -> Platform Administration -> Cache management and clear your site cache.
  ![Image](https://live.staticflickr.com/65535/51597041387_1a8c28a485_b.jpg)

::: warning
Analytics data in Admin dashboard is displayed daily data, so it will reset chart every day. It is displaying data from
API, not realtime analytics so please wait until your site has data from API.
:::

Give your comment here if you got any problem.

Good luck!

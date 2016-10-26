#longhaul-server
A WebSocket frontend for better session store systems like Redis.  This is particularly relevant in situations with especially draconian rules for 3+ - tier applications.  For example, if your application tiers are divided by firewalls, and your presentation layer is not able to access datastores directly, this would serve as a bridge between them without having to open a lot of extra ports in your firewall.
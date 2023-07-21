<?php
define( 'WP_CACHE', true );    // Added by WP Rocket.
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'staging');

/** MySQL database username */
define('DB_USER', 'adomdreampress1');

/** MySQL database password */
define('DB_PASSWORD', 'qX-ZSCPp');

/** MySQL hostname */
define('DB_HOST', 'mysql.adom-smarthome.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Vxn;VkujNWfsTFq9GddiVz%CB(+$H2Z?r:YxUQ?wFznb*y8C/jjOO&06UqfT)0Nz');
define('SECURE_AUTH_KEY',  'xOrR6)XlGfBJ7xtzlApf4`ML:d8x5o6@rpvcCJ#bzhElOxl@Rea8WN?%V(nCSk6J');
define('LOGGED_IN_KEY',    '$aBFiX4q/~S+`w$m4@@sXHheRomkR)MJr/+4OGzdIDsOixq$O?KUkWIqj)T5Tp5N');
define('NONCE_KEY',        '8DxJ0)pt9*Sr$cKTKx?d1XcQj@|)5X^~B1HysQI@@AF8%jpZdwvW!X`Nn1!dbEJ!');
define('AUTH_SALT',        'Vg+_o:jmiJOT4;13os%kFI:oA4M;cZF3KghdxoUwd&61/aaQ/PaMdn1ro0Mt/QX0');
define('SECURE_AUTH_SALT', '|ev?/4ks`eoCz)i83F$Qn3%HLyx&$TuH!"Ve2XbsHmNwN:JET9#vTrrVHprfmy|!');
define('LOGGED_IN_SALT',   '9yqhIX89Bc&/sv^kKvJP?LBB3lZ"d?zFcac5:N(FgVcDj"&n+wu981xpLHvTThhW');
define('NONCE_SALT',       'AZRyB^a;mf%_1qL?lhwsO(7wHI#OVxC&m!zz$`;l1V`uwH$b`+/oF*VTR#J!1ic)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'devmatters_';
define( 'WP_SITEURL', 'https://adom-smarthomecom.stage.site/' );
define( 'WP_HOME', 'https://adom-smarthomecom.stage.site' );
define( 'WP_AUTO_UPDATE_CORE', false );
define( 'WP_DEBUG', true );

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 * Removing this could cause issues with your experience in the DreamHost panel
 */

if (preg_match("/^(.*)\.dream\.website$/", $_SERVER['HTTP_HOST'])) {
        $proto = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https" : "http";
        define('WP_SITEURL', $proto . '://' . $_SERVER['HTTP_HOST']);
        define('WP_HOME',    $proto . '://' . $_SERVER['HTTP_HOST']);
}

define( 'JETPACK_STAGING_MODE', true );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

<?php

	/**
	 * Preprocess HTML
	 */

	function drupalstartertheme_preprocess_html(&$vars,$hook) {

	}

	/**
	 * Preprocess Region
	 */

	function drupalstartertheme_preprocess_region(&$vars,$hook) {

	}

	/**
	 * Preprocess Page
	 */

	function drupalstartertheme_preprocess_page(&$vars,$hook) {
    if (isset($vars['node'])) {
    // If the node type is "blog" the template suggestion will be "page--blog.tpl.php".
     $vars['theme_hook_suggestions'][] = 'page__'. str_replace('_', '--', $vars['node']->type);
    }
	}

	/**
	 * Preprocess Block
	 */

	function drupalstartertheme_preprocess_block(&$vars,$hook) {

	}

	/**
	 * Preprocess Node
	 */

	function drupalstartertheme_preprocess_node(&$vars,$hook) {

	}

	/**
	 * Preprocess Field
	 */

	function drupalstartertheme_preprocess_field(&$vars,$hook) {

	}

  /**
   * Remove Drupal system style sheets
   */
  function drupalstartertheme_css_alter(&$css) {
      unset($css[drupal_get_path('module','system').'/system.theme.css']);
      unset($css[drupal_get_path('module','system').'/system.base.css']);
      unset($css[drupal_get_path('module','system').'/system.menus.css']);
  }


?>

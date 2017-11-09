<?php
/*
Template Name: Kotyrlo Template Career
*/

get_header('career');
remove_filter( 'the_content', 'wpautop' );
?>
<?php while (have_posts()) : the_post(); ?>
	<div <?php post_class() ?> id="post-<?php the_ID(); ?>">
		<?php the_content(); ?>
	</div>
<?php endwhile; ?>
<?php get_footer('career');

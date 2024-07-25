import { injectable } from 'tsyringe';
import {
  Body,
  BodyParam,
  Ctx,
  Get,
  JsonController,
  Post,
  QueryParam,
  Render,
} from 'routing-controllers';
import { Context } from 'koa';
import {
  ApiResErrDTO,
  AuthSupabaseLoginBodyDTO,
  AuthSupabaseSignInBodyDTO,
  AuthSupabaseSignOutBodyDTO,
  EnumAuthSupabaseProvider,
} from '@rfjs/common';
import httpStatus from 'http-status';
import { ResponseSchema } from 'routing-controllers-openapi';
import { Provider, SupabaseClient, createClient } from '@supabase/supabase-js';
import configs from '../configs';

@injectable()
@ResponseSchema(ApiResErrDTO, {
  statusCode: httpStatus.BAD_REQUEST,
})
@JsonController('/auth/supabase')
export class AuthSupabaseController {
  private supabase: SupabaseClient<any, 'public', any> = createClient(
    configs.supabase.url,
    configs.supabase.key,
  );

  @Post('/info')
  async signIn(@Ctx() ctx: Context, @Body() body: AuthSupabaseSignInBodyDTO) {
    const { redirectTo } = body;

    const data: {
      provider: Provider;
      url: string;
    }[] = [];
    for (const key in EnumAuthSupabaseProvider) {
      const provider = EnumAuthSupabaseProvider[key];
      const auth = await this.supabase.auth.signInWithOAuth({
        provider: provider as any,
        options: {
          redirectTo,
        },
      });
      if (!auth.error) {
        data.push(auth.data);
      }
    }
    return {
      data,
    };
  }

  @Post('/login')
  async login(@Ctx() ctx: Context, @Body() body: AuthSupabaseLoginBodyDTO) {
    return body;
  }

  @Post('/logout')
  async signOut(@Ctx() ctx: Context, @Body() body: AuthSupabaseSignOutBodyDTO) {
    const { accessToken, refreshToken } = body;
    await this.supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    const data = await this.supabase.auth.signOut();
    return data;
  }

  @Post('/accessToken')
  async supabaseToken(
    @Ctx() ctx: Context,
    @BodyParam('accessToken') accessToken: string,
  ) {
    const data = await this.supabase.auth.getUser(accessToken);
    return {
      data,
    };
  }

  @Post('/refresh')
  async refresh(
    @Ctx() ctx: Context,
    @BodyParam('refreshToken') refreshToken: string,
  ) {
    const data = await this.supabase.auth.refreshSession({
      refresh_token: refreshToken,
    });
    return {
      data,
    };
  }

  @Get('/callback')
  async getSupabase2(
    @Ctx() ctx: Context,
    @QueryParam('access_token') access_token: string,
    @QueryParam('expires_at') expires_at: string,
    @QueryParam('expires_in') expires_in: string,
    @QueryParam('provider_token') provider_token: string,
    @QueryParam('refresh_token') refresh_token: string,
    @QueryParam('token_type') token_type: string,
  ) {
    const path = ctx.path;
    const url = ctx.url;
    const querystring = ctx.querystring;
    const query = ctx.query;
    console.log('querystring: ', querystring);
    console.log('query: ', query);
    return {
      path,
      url,
      access_token,
      expires_at,
      expires_in,
      provider_token,
      refresh_token,
      token_type,
    };
  }

  @Get('/redirect')
  @Render('supabase.html')
  supabaseRedirect() {
    return;
  }
}

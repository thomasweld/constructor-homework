import { expect, it } from './suite';

function testRunner (sadie, moonshine, atticus, mason, julia) {

  it("should make Sadie happy when Mason pets her", function(){
    expect(sadie.status).toBe('normal');
    mason.pet(sadie);
    expect(sadie.status).toBe('happy');
  });

  it("should make Sadie black", function(){
    expect(sadie.color).toBe('black');
  });

  it("should be make Moonshine hungry and Sadie not hungry", function(){
    expect(moonshine.hungry).toBe(true);
    expect(sadie.hungry).toBe(false);
  });

  it("should make Moonshine no longer hungry when you feed him", function(){
    julia.feed(moonshine);
    expect(moonshine.hungry).toBe(false);
  });

  it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function(){
    sadie.owner = mason;
    expect(moonshine.owner).toBe(undefined);
    expect(atticus.owner).toBe(undefined);
  });

  it("should make Julia cool and Mason not cool", function(){
    sadie.owner = mason;
    expect(julia.cool).toBe(true);
    expect(mason.cool).toBe(false);
  });
}

export default testRunner;